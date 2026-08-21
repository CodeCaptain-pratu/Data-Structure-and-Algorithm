/**
 * @param {String} s1
 * @param {String} s2
 * @returns {number}
 */

class Solution {
    transform(s1, s2) {
        // code here
        if(s1.length!==s2.length){
            return -1;
        }
        let freq=new Array(256).fill(0);
        for(let i=0;i<s1.length;i++){
            freq[s1.charCodeAt(i)]++;
            freq[s2.charCodeAt(i)]--;
        }
        for(let idx of freq){
            if(idx!==0){
                return -1;
            }
        }
        let n=s1.length;
        let i=n-1;
        let j=n-1;
        let ops=0;
        while(i>=0){
            while(i>=0 && s1[i]!==s2[j]){
                ops++;
                i--;
            }
            if(i>=0){
                i--;
                j--;
            }
        }
        return ops;
    }
}
