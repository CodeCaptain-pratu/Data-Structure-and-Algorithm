class Solution {
    makeBeautiful(arr) {
        // code here
        let st = [];
        for(let num of arr){
            if(st.length && ((st[st.length-1]>=0 
            && num<0) || (st[st.length-1]<0) &&
            num>=0)){
                st.pop();
            }else{
                st.push(num);
            }
        }
        return st;
    }
};
