/**
 * @param {number} n
 * @return {boolean}
 */
/*
Approach:
1. Convert the number into its binary representation.
2. Traverse the binary string and compare adjacent bits.
3. If two consecutive bits are equal, return false.
4. Otherwise, return true.

Time Complexity: O(log n)
Space Complexity: O(log n) */

var hasAlternatingBits = function(n) {
    let result="";
    while(n>0){
        result+=n%2;
        n=Math.floor(n/2);
    }
    let ans=result.split("").reverse().join("");
    for(let i=1;i<ans.length;i++){
        if(ans[i]===ans[i-1]){
            return false;
        }
    }
    return true;
};
