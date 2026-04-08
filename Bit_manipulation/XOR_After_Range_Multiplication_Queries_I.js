/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var xorAfterQueries = function(nums, queries) {
    let mod=1e9+7;
    for(let [l,r,k,v] of queries){
        let idx=l;
        while(idx<=r){
            nums[idx]=(nums[idx]*v)%mod;
            idx+=k;
        }
    }
    let xor=0;
    for(let num of nums){
        xor^=num;
    }
    return xor;
};
