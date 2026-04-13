/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
//Approach 1: Simulation 
var getMinDistance = function(nums, target, start) {
    let mindist=Infinity;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            mindist=Math.min(mindist,Math.abs(i-start));
        }
    }
    return mindist;
};
//Time Complexity : O(n)
//Space Complexity: O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */

//Approach 2 : Early Return 
var getMinDistance = function(nums, target, start) {
    let mindist=Infinity;
    for(let i=0;i<nums.length && 
        mindist>Math.abs(i-start);i++){
        if(nums[i]===target){
            mindist=Math.min(mindist,Math.abs(i-start));
        }
    }
    return mindist;
};

//Time complexity : O(n)
//Space Complexity: O(1)
