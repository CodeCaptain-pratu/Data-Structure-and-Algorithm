/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    findPosition(n) {
        // code here
        let setBitPos = -1;
        let countSetBits = 0;
        let pos = 1;
        while(n>0){
            let r = n%2;
            if(r===1){
                setBitPos = pos;
                countSetBits++;
            }
            n = Math.floor(n/2);
            pos++;
        }
        return countSetBits>1?-1:setBitPos;
    }
}

/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    findPosition(n) {
        // code here
        if(n === 0 || (n & (n-1))!==0){
            return -1;
        }   
        let pos=1;
        while((n & 1)===0){
            n = n>>1;
            pos++;
        }
        return pos;
    }
}
