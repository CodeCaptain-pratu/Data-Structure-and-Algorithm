/**
 * @param {number} n
 * @param {number} s1
 * @param {number} s2
 * @returns {number}
 */

class Solution {
    minTime(n, s1, s2) {
        // code here
        let low = 0;
        let high = Math.max(s1,s2)*n;
        let ans = high;
        while(low<=high){
            let mid = Math.floor((low+high)/2);
            let count = Math.floor(mid/s1)+
            Math.floor(mid/s2);
            if(count>=n){
                ans=mid;
                high=mid-1;
            }else{
                low=mid+1;
            }
        }
        return ans;
    }
}
