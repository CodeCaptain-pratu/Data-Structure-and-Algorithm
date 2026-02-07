/**
 * @param {string} s
 * @return {number}
 */

/*
### Approach 1 : Stack Approach 
1) Create a stack 
2) Traverse the string 
3) Push the character in the stack 
4) If the last element in the stack is b and currrent element is a
   then remove the last element from the stack and increase the count

Time Complexity  : O(n) 
Space Complexity : O(n)  
*/
var minimumDeletions = function(s) {
    let st=[];
    let count=0;
    for(let i=0;i<s.length;i++){
        if(st.length>0 && st[st.length-1]==='b'
         && s[i]==='a'){
            st.pop();
            count++;
        }else{
            st.push(s[i]);
        }
    }
    return count;
};
