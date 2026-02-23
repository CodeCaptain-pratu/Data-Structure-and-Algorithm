/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    let st=new Set();
    for(let i=k;i<=s.length;i++){
        st.add(s.substring(i-k,i));
    }
    return st.size===1<<k;
};
