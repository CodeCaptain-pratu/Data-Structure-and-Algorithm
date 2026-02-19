/**
 * @param {string} s
 * @return {number}
 */ 
/*
Approach :
1) Maintain two variables:
   - prev → length of previous consecutive group
   - curr → length of current consecutive group
2) Traverse the binary string starting from index 1.
3) If the current character is same as the previous character,
   increment curr (current group continues).
4) Otherwise:
   - Add min(prev, curr) to the result.
   - Update prev = curr.
   - Reset curr = 1 for the new group.
5) After traversal, add min(prev, curr) once more
   to handle the last group.
6) Return the result.

Time Complexity  : O(n) 
Space Complexity : O(1)*/

var countBinarySubstrings = function(s) {
    let prev=0, curr=1;
    let result=0;
    for(let i=1;i<s.length;i++){
        if(s[i]===s[i-1]){
            curr++;
        }else{
            result+=Math.min(prev,curr);
            prev=curr;
            curr=1;
        }
    }
    result+=Math.min(prev,curr);
    return result;
};
