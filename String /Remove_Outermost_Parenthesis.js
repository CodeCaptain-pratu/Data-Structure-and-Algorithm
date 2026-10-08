/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let str="";
    let ans=0;
    for(let ch of s){
        if(ch==="("){
            ans++;
            if(ans>1){
                str+=ch
            }
        }else{
            ans--;
            if(ans>0){
                str+=ch;
            }
        }
    }
    return str;
};
