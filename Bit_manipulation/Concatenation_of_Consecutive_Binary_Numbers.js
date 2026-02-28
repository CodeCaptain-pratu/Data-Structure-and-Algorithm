/**
 * @param {number} n
 * @return {number}
 */
/*Approach 1 : Brute Force 
As the problem requires Concatinating the Binary representation from 1 to n and returning its 
decimal value 
1) Initialize the newBinary string to store the concatenated result
2) Traverse numbers from 1 to n 
3) Convert each number into its Binary representation 
4) Concatenate the binary value to newBinary
5) Convert the final binary string into decimal and return it.

Time Complexity : O(n log n) 
Space Complexity : O( log n ) */

var concatenatedBinary = function(n) {
    function convertBinary(num){
        let result="";
        while(num>0){
            result=result+num%2;
            num=Math.floor(num/2);
        }
        return result.split("").reverse().join("");
    }
    let newBinary="";
    for(let i=1;i<=n;i++){
        newBinary+=convertBinary(i);
    }
    return parseInt(newBinary,2);
};

/**
 * @param {number} n
 * @return {number}
 */
/*Approach 2 - Mathematical Bit - Length Optimization 
1) Traverse the numbers from 1 to n 
2) Compute the number of bits required to represent the 
   current number using logarithm 
3) Left shift the previous result by multiplying it with 
   2^bits and append the current number
4) Apply modulo at each step to avoid overrflow and 
   return the final result

Time Complexity  : O(n) 
Space Complexity : O(1)*/

var concatenatedBinary = function(n) {
    let mod=1e9+7;
    let result=0;
    for(let i=1;i<=n;i++){
        let bits=Math.floor(Math.log2(i))+1;
       result=(result * (2**bits) + i) %mod;
    }
    return result;
};

/**
 * @param {number} n
 * @return {number}
 */
/*Approach 3 : Bit Manipulation 
1) Traverse the numbers from 1 to n
2) Use ( i & (i-1)) to check the current number is 
   power of 2 :
   - Whenever it is increase the digit count 
3) Left shift the previous result by Multiplying it with 
   2^bits and append the current number 
   number to it :
4) Apply the modulo operation and return the final result 

Time Complexity  : O(n) 
Space Complexity : O(1)*/

var concatenatedBinary = function(n) {
    let result=0;
    let mod=1e9+7;
    let digits=0;
    for(let i=1;i<=n;i++){
        if((i&(i-1))===0){
            digits++;
        }
        result = (result * (2 ** digits) + i) %mod;
    }
    return result;
};
