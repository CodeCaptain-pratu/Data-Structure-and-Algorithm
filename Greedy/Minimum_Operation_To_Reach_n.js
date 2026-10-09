/**
 * @param {number} n
 * @return {number}
 */

class Solution {
    minOperation(n) {
        // code here
        let count = 0;
        while(n>0){
            if(n%2===0){
                n = Math.floor(n/2);
            }else{
                n = n-1;
            }
            count++;
        }
        return count;
    }
}
