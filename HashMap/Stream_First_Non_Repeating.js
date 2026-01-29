/**
 * @param {string} s
 * @return {string}
 */
/*
### Approach
1) Traverse the string

2) Count the frequency of the character and push the character in the queue simultaneously

3) If queue is not empty and the first character in the queue has the frequency greater than 1
then shift it from the queue.

4) If queue is empty the add # to resultant string else the first character from the queue.

Time Complexity  : O(n) 
Space Complexity : O(n) 
*/
class Solution {
    firstNonRepeating(s) {
        // code here
        let mp=new Map();
        let q=[];
        let str="";
        for(let i=0;i<s.length;i++){
            mp.set(s[i],(mp.get(s[i])||0)+1);
            q.push(s[i]);
            while(q.length>0 && mp.get(q[0])>1){
                q.shift();
            }
            if(q.length===0){
                str+="#"
            }else{
                str+=q[0];
            }
        }
        return str;
    }
}
