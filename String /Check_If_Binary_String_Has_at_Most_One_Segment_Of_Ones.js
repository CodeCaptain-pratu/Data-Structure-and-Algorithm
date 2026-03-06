/**
 * @param {string} s
 * @return {boolean}
 */
/*Approach 1 : Brute Force 
Time Complexity  : O(n) 
Space Complexity : O(1)*/

var checkOnesSegment = function(s) {
    for(let i=0;i<s.length-1;i++){
        if(s[i]==="0" && s[i+1]==="1"){
            return false;
        }
    }
    return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */

/*ApproaCoch 2 : 
Time Complexity  : O(n) 
Space Complexity : O(1)*/

var checkOnesSegment = function(s) {
    return !s.includes("01");
};
