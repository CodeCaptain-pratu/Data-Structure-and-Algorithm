
var minMoves = function(nums) {
    let n = nums.length;
    let maxi= 0;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += nums[i];

        maxi = Math.max(maxi,nums[i]);
    }

    return maxi * n - sum;
};
