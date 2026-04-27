/**
 * @param {string} s
 * @returns {number}
 */
class Solution {
    smallestSubstring(s) {
        // code here
        let i=0, j=0;
        let one=0, two=0, zero=0;
        let mini=Infinity;
        while(j<s.length){
            if(s[j]==="0"){
                zero++;
            }else if(s[j]==="1"){
                one++;
            }else{
                two++;
            }
            while(one>0 && two>0 && zero>0){
                mini = Math.min(mini, j-i+1);
                if(s[i]==="0"){
                    zero--;
                }else if(s[i]==="1"){
                    one--;
                }else{
                    two--;
                }
                i++;
            }
            if(one && two && zero){
                mini=Math.min(mini,j-i+1);
            }
            j++;
        }
        return mini===Infinity?-1:mini;
    }
};
