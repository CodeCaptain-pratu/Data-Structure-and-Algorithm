/**
 * @param {string} s
 * @returns {number}
 */

class Solution {
    minFlips(s) {
        // code here
        let count1 = 0, count2 = 0;
        for(let i=0;i<s.length;i++){
            let exp1 = (i%2===0)?"0":"1";
            let exp2 = (i%2===0)?"1":"0";
            if(exp1!==s[i]){
                count1++;
            }
            if(exp2!==s[i]){
                count2++;
            }
        }
        return Math.min(count1,count2);
    }
}
