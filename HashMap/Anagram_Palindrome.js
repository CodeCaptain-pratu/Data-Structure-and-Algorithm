/**
 * @param {string} s
 * @returns {boolean}
 */
//Approach 1 : using Map
class Solution {
    canFormPalindrome(s) {
        // code here
        let mp=new Map();
        for(let ch of s){
            mp.set(ch,(mp.get(ch)||0)+1);
        }
        let odd=0;
        for(let [key,value] of mp){
            if(value%2===1){
                odd++;
            }
        }
        return odd===0 || odd===1;
    }
}

// Approach 2 : using constant space 
/**
 * @param {string} s
 * @returns {boolean}
 */
class Solution {
    canFormPalindrome(s) {
        // code here
        let mp = new Array(26).fill(0);
        for(let i=0;i<s.length;i++){
           let idx=s.charCodeAt(i) -
           'a'.charCodeAt(0);
           mp[idx]++;
        }
        let odd=0;
        for(let i=0;i<26;i++){
            if(mp[i]%2 === 1){
                odd++;
            }
        }
        return odd === 0 || odd === 1;
    }
}
