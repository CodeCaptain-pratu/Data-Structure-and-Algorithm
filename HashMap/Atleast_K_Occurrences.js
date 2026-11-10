/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    firstElementKTime(arr, k) {
        // code here
        let mp = new Map();
        for(let num of arr){
            mp.set(num,(mp.get(num)||0)+1);
            if(mp.get(num)===k){
                return num;
            }
        }
        return -1;
    }
}
