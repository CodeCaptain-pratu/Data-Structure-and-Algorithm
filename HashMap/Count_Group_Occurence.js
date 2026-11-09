/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

class Solution {
    getCount(s, k) {
        // code here
        let mp = new Map();
        for(let i=0;i<s.length;i++){
            if(i===s.length-1 || s[i]!==s[i+1]){
                mp.set(s[i],(mp.get(s[i])||0)+1);
            }
        }
        let ans = 0;
        for(let count of mp.values()){
            if(count===k){
                ans++;
            }
        }
        return ans;
    }
}
