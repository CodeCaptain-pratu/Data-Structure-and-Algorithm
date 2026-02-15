// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} m
 * @returns {number}
 */

class Solution {
    findMinDiff(arr, n) {
        // code here
        arr.sort((a,b)=>a-b);
        let result=Infinity;
        for(let i=0;i<=arr.length-n;i++){
            let diff=arr[i+n-1]-arr[i];
            result=Math.min(result,diff);
        }
        return result;
    }
}
