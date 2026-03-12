/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    kBitFlips(arr, k) {
        // code here
        let n = arr.length;
        let op=0;
        for(let i=0;i<n;i++){
            if(arr[i]===0){
                if(i+k>n){
                    return -1;
                }
                for(let j=i;j<i+k;j++){
                    arr[j]=arr[j]===0?1:0;
                }
                op++;
            }
        }
        return op;
    }
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    kBitFlips(arr, k) {
        // code here
        let n = arr.length;

    let flips = 0;
    let isFlipped = new Array(n).fill(false);
    let flipCountFromPastForCurri = 0;

    for (let i = 0; i < n; i++) {

        if (i >= k && isFlipped[i - k] === true) {
            flipCountFromPastForCurri--;
        }

        if (flipCountFromPastForCurri % 2 === arr[i]) {

            if (i + k > n) {
                return -1;
            }

            flipCountFromPastForCurri++;
            isFlipped[i] = true;
            flips++;
        }
    }

    return flips;
    }
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    kBitFlips(arr, k) {
        // code here
        let n = arr.length;

    let flips = 0;
    let flipCountFromPastForCurri = 0;

    for (let i = 0; i < n; i++) {

        if (i >= k && arr[i - k] === 2) { // Was it flipped
            flipCountFromPastForCurri--;
        }

        if (flipCountFromPastForCurri % 2 === arr[i]) {

            if (i + k > n) {
                return -1;
            }

            flipCountFromPastForCurri++;
            arr[i] = 2; // Marking as flipped
            flips++;
        }
    }

    return flips;
    }
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    kBitFlips(arr, k) {
        // code here
        let n = arr.length;

        let flips = 0;
        let flipQue = [];
        let front = 0;
        let flipCountFromPastForCurri = 0;

        for (let i = 0; i < n; i++) {

            if (i >= k) {
                flipCountFromPastForCurri -= flipQue[front];
                front++;
            }

            if (flipCountFromPastForCurri % 2 === arr[i]) {

                if (i + k > n) {
                    return -1;
                }

                flipCountFromPastForCurri++;
                flipQue.push(1);
                flips++;

            } else {
                flipQue.push(0);
            }
        }

        return flips;
    }
}
