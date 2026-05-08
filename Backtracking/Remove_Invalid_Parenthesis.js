/**
 * @param {string} s
 * @returns {string[]}
 */
class Solution {
    validParenthesis(s) {
        // code here
        function isValid(str){
            let count = 0;
            for(let ch of str){
                if(ch==="("){
                    count++;
                }else if (ch===")"){
                    if(count===0){
                        return false;
                    }
                    count--;
                }
            }
            return count === 0;
        }
        let q = [];
        let visited = new Set();
        q.push(s);
        let ans = new Set();
        visited.add(s);
        let found = false;
        while(q.length>0){
            let str = q.shift();
            if(isValid(str)){
                ans.add(str);
                found = true;
            }
            if(found){
                continue;
            }
            for(let i=0;i<str.length;i++){
                if(str[i]!=="(" && str[i]!==")"){
                    continue;
                }
                let newstr = str.slice(0,i)+str.slice(i+1);
                if(!visited.has(newstr)){
                    q.push(newstr);
                    visited.add(newstr);
                }
            }
        }
        return [...ans].sort();
    }
} 
