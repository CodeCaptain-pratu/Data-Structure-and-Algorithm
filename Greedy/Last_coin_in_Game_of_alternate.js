/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    coin(arr) {
        // code here
        let mini=Infinity;
        for(let num of arr){
            mini=Math.min(num,mini);
        }
        return mini;
    }
}
