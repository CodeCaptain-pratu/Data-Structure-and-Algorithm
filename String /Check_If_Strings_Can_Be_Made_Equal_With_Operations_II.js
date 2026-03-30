/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function(s1, s2) {
  let even=new Array(26).fill(0);
  let odd=new Array(26).fill(0);
  let n=s1.length;
  for(let i=0;i<n;i++){
    let idx1=s1.charCodeAt(i)-'a'.charCodeAt(0);
    let idx2=s2.charCodeAt(i)-'a'.charCodeAt(0);
    if(i%2===0){
        even[idx1]++;
        even[idx2]--;
    }else{
        odd[idx1]++;
        odd[idx2]--;
    }
  }  
  for(let i=0;i<26;i++){
    if(even[i]!==0 || odd[i]!==0){
        return false;
    }
  }
  return true;
};
