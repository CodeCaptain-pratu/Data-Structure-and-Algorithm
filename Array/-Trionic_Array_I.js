/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
### Approach -
A Trionic Array must follow strictly increasing -> strictly decreasing -> strictly increasing pattern.
1) Start traversing from index 0 and first check for a strictly incraesing sequence 
If no increasing sequence is found return false.

2) From where the increase stops, check for strictly decreasing sequence. 
If no decreasing sequence is found return false.

3) From where the decrease stops, check for strictly increasing sequence.
If no increasing sequence is found return false.

4) At the end return true, If we have reached the last index of the array after
completing all three phases.

Time Complexity  : O(n) 
Space Complexity : O(1)
*/
var isTrionic = function(nums) {
    let n=nums.length;
    let i=0;
    let count=0;
    while(nums[i]<nums[i+1] && i+1<n){
        count++;
        i++;
    }
    if(count===0){
        return false;
    }
    count=0;
    while(nums[i]>nums[i+1] && i+1<n){
        count++;
        i++;
    }
    if(count===0){
        return false;
    }
    count=0;
    while(nums[i]<nums[i+1] && i+1<n){
        count++;
        i++;
    }
    if(count===0){
        return false;
    }
    return i===n-1;
};
