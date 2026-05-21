/**
 * @param {number} n
 * @return {boolean}
 */
//Approach 1 : (Brute Force)
class Solution {
    isBitSet(n) {
        // code here
        let num = n; 
        if(n===0){
            return false;
        }
        while(num>0){
            let r=num%2;
            if(r===0){
                return false;
            }
            num=Math.floor(num/2);
        }
        return true;
    }
}
//Time Complexity  : O(log n)
//Space Complexity : O(1) 

/**
 * @param {number} n
 * @return {boolean}
 */
//Approach 2 
class Solution {
    isBitSet(n) {
        // code here
        if(n===0){
            return false;
        }
        return (n&(n+1))===0;
    }
}

//Time Complexity  : O(1) 
//Space Complexity : O(1)
