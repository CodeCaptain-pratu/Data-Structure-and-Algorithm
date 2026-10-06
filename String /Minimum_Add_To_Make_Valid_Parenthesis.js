var minAddToMakeValid = function(s) {
    let st = [];
    for(let ch of s){
        if(st.length>0 && (st[st.length-1]==="(" &&
        ch===")")){
            st.pop();
        }else{
            st.push(ch);
        }
    }
    return st.length;
};
