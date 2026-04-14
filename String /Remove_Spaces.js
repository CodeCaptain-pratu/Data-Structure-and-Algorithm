/**
 * @param {string}s
 * @returns {string}
 */
class Solution {
    removeSpaces(s) {
        // code here
        let res="";
        for(let i=0;i<s.length;i++){
            if(s[i]!==" "){
                res+=s[i];
            }
        }
        return res;
    }
}

/**
 * @param {string}s
 * @returns {string}
 */
class Solution {
    removeSpaces(s) {
        // code here
        return s.replace(/ /g,"");
    }
}

/**
 * @param {string}s
 * @returns {string}
 */
class Solution {
    removeSpaces(s) {
        // code here
        return s.split(" ").join("");
    }
}
