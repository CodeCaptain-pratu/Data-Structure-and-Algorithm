/**
 * @param {number[]} nums
 * @return {number}
 */
/*
### Approach :
 For dividing nums into 3 disjoint continuous Subarray 
 with minimum cost 
 1) The first Subarray must start from index 0, so nums[0]
 must be included in the score 
 2) To minimize the total cost, we need two elements from 
 remaining part of the array.
 3) Traverse the array from index 1 and keep track of
 smallest and second smallest values.
 4) Return the sum of 0th index value + first minimum +
 second minimum.

Time complexity. : O(n)
Space complexity : 0(1)
*/
var minimumCost = function(nums) {
    let n=nums.length;
    let score=nums[0];
    let firstMin=Infinity;
    let secondMin=Infinity;
    for(let i=1;i<n;i++){
        if(nums[i]<firstMin){
            secondMin=firstMin;
            firstMin=nums[i];
        }
        else if(nums[i]<secondMin){
            secondMin=nums[i];
        }
    }
    return score+firstMin+secondMin;
};
