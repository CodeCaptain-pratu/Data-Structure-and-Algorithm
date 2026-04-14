/**
 * @param {String} s
 * @returns {String}
 */
//Approach 1: Brute Force 
class Solution {
    URLify(s) {
        // code here
        let res="";
        for(let i=0; i<s.length; i++){
            if(s[i]===" "){
                res+="%20";
            }else{
                res+=s[i];
            }
        }
        return res;
    }
}
//Approach 2 : Using Replace Method 
/**
 * @param {String} s
 * @returns {String}
 */
class Solution {
    URLify(s) {
        // code here
        return s.replace(/ /g,"%20");
    }
}

//Approach 3 : Using Split and join method 
/**
 * @param {String} s
 * @returns {String}
 */
class Solution {
    URLify(s) {
        // code here
        return s.split(" ").join("%20");
    }
}
