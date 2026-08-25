/**
 * @param {number[]} arr
 * @return {number}
 */
class Solution {
    minMoves(arr) {
        let n = arr.length;

        let pos = new Array(n).fill(0);

        // Store the position of each value
        for (let i = 0; i < n; i++) {
            pos[arr[i] - 1] = i;
        }

        let len = 1;
        let maxi = 1;

        for (let i = 1; i < n; i++) {
            if (pos[i] > pos[i - 1]) {
                len++;
                maxi = Math.max(maxi, len);
            } else {
                len = 1;
            }
        }

        return n - maxi;
    }
}
