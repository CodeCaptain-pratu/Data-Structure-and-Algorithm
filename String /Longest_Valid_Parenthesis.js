/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let st = [-1];
    let maxi=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==="("){
            st.push(i);
        }else{
            st.pop();
            if(st.length===0){
                st.push(i);
            }else{
                maxi=Math.max(maxi,i-st[st.length-1]);
            }
        }
    }
    return maxi;
};
