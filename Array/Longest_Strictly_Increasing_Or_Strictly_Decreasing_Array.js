/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let inc=1;
    let dec=1;
    let incCount = 1;
    let decCount = 1;
    for(let i=1;i<nums.length;i++){
        if(nums[i-1]<nums[i]){
            incCount++;
            decCount=1;
            inc=Math.max(inc,incCount);
        }else if(nums[i-1]>nums[i]){
            decCount++;
            decCount=1;
            decCount=Math.max(dec,decCount);
        }
    }
    return Math.max(inc,dec);
};
