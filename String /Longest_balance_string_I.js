/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {
   let maxlen=0;
   function isBalance(freq){
      let common=0;
      for(let i=0;i<26;i++){
        if(freq[i]===0){
            continue;
        }
        if(common===0){
            common=freq[i];
        }else if(freq[i]!==common){
            return false;
        }
      }
      return true;
   }
   for(let i=0;i<s.length;i++){
    let freq=new Array(26).fill(0);
    for(let j=i;j<s.length;j++){
        let ch=s[j];
        let idx=ch.charCodeAt(0)-'a'.charCodeAt(0);
        freq[idx]++;
        if(isBalance(freq)){
            maxlen=Math.max(maxlen,j-i+1);
        }
    }
   }  
   return maxlen;
};
