/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let st = [0];
    for(let ch of s){
        if(ch==="("){
            st.push(0);
        }else{
            let inner = st.pop();
            if(inner===0){
                inner=1;
            }else{
                inner= 2*inner;
            }
            st[st.length-1]+=inner;
        }
    }
    return st[0];
};
