var missingInteger = function(nums) {
    let mp = new Map();

    for(let i = 0; i < nums.length; i++) {
        mp.set(nums[i], i);
    }

    let sum = nums[0];

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] === nums[i - 1] + 1) {
            sum += nums[i];
        } else {
            break;
        }
    }

    while(mp.has(sum)) {
        sum++;
    }

    return sum;
};
