//Approach 1 :
class Solution {
    intersection(a, b) {
        // code here
        let st=new Set();
        for(let num of a){
            st.add(num);
        }
        let result=new Set();
        for(let num of b){
            if(st.has(num)){
                result.add(num);
            }
        }
        let ans=[... result];
        return ans;
    }
}
//Approach 2 :
class Solution {
    intersection(a, b) {
        // code here
        let st=new Set(a);
        return [...new Set(b.filter(num=>st.has(num)))];
    }
}
//Approach 3 :
class Solution {
    intersection(a, b) {
        // code here
        let st=new Set(a);
        let result=[];
        for(let num of b){
            if(st.has(num)){
                result.push(num);
                st.delete(num);
            }
        }
        return result;
    }
}
