/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    maxProfit(arr, k) {
        // code here
        let n = arr.length;
        
        let hold = -arr[0];
        
        let cash = 0;
        
        for (let i = 1; i < n; i++) {
            let prevCash = cash;
            
            hold = Math.max(hold, prevCash - arr[i]);
            
            cash = Math.max(cash, hold + arr[i] - k);
        }
        
        return cash;
    }
}
