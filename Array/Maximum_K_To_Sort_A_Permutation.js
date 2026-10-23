var sortPermutation = function(nums) {
    return Math.max(nums.filter((x, i) => x !== i).reduce((a, b) => a & b, -1), 0);
};
