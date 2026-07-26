/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let maxi = -Infinity;
    let n=nums.length;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            for(let k=j+1;k<n;k++){
                maxi=
                    Math.max(maxi,
                    nums[i]*nums[j]*nums[k]);
            }
        }
    }
    return maxi;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a,b)=>a-b);
    let n=nums.length;
    return Math.max(nums[0]*nums[1]*nums[n-1],
        nums[n-1]*nums[n-2]*nums[n-3]);
};
