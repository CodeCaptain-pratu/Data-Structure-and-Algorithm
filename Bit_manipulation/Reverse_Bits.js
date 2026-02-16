/**
 * @param {number} n
 * @return {number}
 */

/*
Approach:

1) Handle base case: if n is 0, return 0 since reverse of 0 is 0.
2) Iterate through all 32 bits of the number.
3) Left shift result by 1 to make space for the next bit.
4) Extract the least significant bit (LSB) using (n & 1) and add
   it to result using OR operation.
5) Right shift n to process the next bit.
6) Return the final reversed result.

Time Complexity  : O(32) → O(1)
Space Complexity : O(1)
*/

var reverseBits = function(n) {
    if(n===0){
        return 0;
    }
    let result=0;
    for(let i=0;i<32;i++){
        result<<=1;
        result = ( result | (n&1))
        n>>=1;
    }
    return result;
};
