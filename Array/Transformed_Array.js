/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
### Approach 1 :
1) Traverse the array from index 0 to n-1.
2) For each index i calculate the effective movement using 
   steps = nums[i] % n
   This keeps movement within circular bonds even if the number is large or negative
3) Compute the new circular index using
   newIdx = (i + steps) % n 
4) If new index becomes negative adjust it by adding n to it
   newIdx + = n
5) Assign 
   result[i] = nums[newIdx]
   
Time Complexity  : O(n)
Space Complexity : O(n) 
*/
var constructTransformedArray = function(nums) {
    let n=nums.length;
    let result=new Array(n);
    for(let i=0;i<n;i++){
        let steps=nums[i]%n;
        let newIdx=(i+steps)%n;
        if(newIdx<0){
            newIdx+=n;
        }
        result[i]=nums[newIdx];
    }
    return result;
};
