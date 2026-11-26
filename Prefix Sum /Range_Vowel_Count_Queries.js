/**
 * @param {string} s
 * @param {number[][]} queries
 * @returns {number[]}
 */

class Solution {
    countVowels(s, queries) {
        // code here
        let n = s.length;
        let prefix = new Array(n).fill(0);
        for(let i=0; i<n; i++){
            let ch = s[i];
            let isVowel = (ch==="a" || ch==="e" ||
            ch==="i" || ch==="o" || ch==="u")?1:0;
            prefix[i]=isVowel;
            if(i>0){
                prefix[i]+=prefix[i-1];
            }
        }
        let ans=[];
        for(let [l,r] of queries){
            if(l===0){
                ans.push(prefix[r]);
            }else{
                let vowelCount=prefix[r]-prefix[l-1];
                ans.push(vowelCount);
            }
        }
        return ans;
    }
}
