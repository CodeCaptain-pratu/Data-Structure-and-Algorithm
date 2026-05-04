//Approach 1 : Brute Force 
class Solution {
    isBinaryPalindrome(n) {
        // code here
        let num = n;
        let binary = "";
        while(num>0){
            let r=num%2;
            binary=r+binary;
            num = Math.floor(num/2);
        }
        let l=0, r=binary.length-1;
        while(l<r){
            if(binary[l]!==binary[r]){
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
Time Complexity  : O((log n)^2)
Space Complexity : O(log n)

//Approach 2 :
class Solution {
    isBinaryPalindrome(n) {
        // code here
        let original=n;
        let reversed=0;
        while(n>0){
            let bit = n & 1;
            reversed = (reversed<<1) | bit;
            n = n>>1;
        }
        return original===reversed;
    }
}

Time Complexity  : O(log n)
Space Complexity : O(1)
