/**
 * @param {number[]} nums
 * @return {number}
 */
/*
Approach : 
We want to find the length of longest subarray with equal number of unique odd and even
elements 
1) Traverse the array from 0 to n-1 
   i=0 to n-1
2) Take the two set to add even and odd element to track count of unique even and odd 
   elements for subarray starting from i 
3) Start a loop for j=i to n for subarray 
4) If element at j is even add it in even set else in odd set 
5) If the size of even and odd set is equal update the maxlen 
   = maxlen = max(maxlen, j-i+1)
6) Return the maxlen finally 

Time Complexity  : O(n^2) 
Space Complexity : O(n) 
*/

var longestBalanced = function(nums) {
    let n=nums.length;
    let maxlen=0;
    for(let i=0;i<n;i++){
        let even=new Set();
        let odd = new Set();
        for(let j=i;j<n;j++){
            if(nums[j]%2===0){
                even.add(nums[j]);
            }
            if(nums[j]%2!==0){
                odd.add(nums[j]);
            }
            if(even.size===odd.size){
                maxlen=Math.max(maxlen,j-i+1);
            }
        }
    }
    return maxlen;
};
