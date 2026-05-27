/**
 * @param {string} s
 * @param {number} x
 * @returns {boolean}
 */
class Solution {
    wifiRange(s, x) {
        // code here
        let n=s.length;
        let res = new Array(n).fill(false);
        for(let i=0;i<n;i++){
            if(s[i]==="1"){
                let l=Math.max(0,i-x);
                let r=Math.min(n-1,i+x);
                for(let j=l;j<=r;j++){
                    res[j]=true;
                }
            }
        }
        for(let i=0;i<n;i++){
            if(!res[i]){
                return false;
            }
        }
        return true;
    }
}
