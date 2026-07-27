/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxi = -Infinity;
    let n = nums.length;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            maxi=Math.max(maxi,(nums[i]-1)*(nums[j]-1));
        }
    }
    return maxi;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let large = -Infinity;
    let secondLarge = - Infinity;
    for(let num of nums){
        if(num>large){
            secondLarge = large;
            large = num;
        }else if(num>secondLarge){
            secondLarge = num;
        }
    }
    return (large-1)*(secondLarge-1);
};
