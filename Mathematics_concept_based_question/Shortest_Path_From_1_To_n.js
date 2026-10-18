/**
 * @param {number} n
 * @return {number}
 */

class Solution {
    minimumStep(n) {
        // code here
        let ans = 0;
        while(n){
            if(n%3===0){
                n=Math.floor(n/3);
            }else{
                n--;
            }
            ans++;
        }
        return ans-1;
    }
}
