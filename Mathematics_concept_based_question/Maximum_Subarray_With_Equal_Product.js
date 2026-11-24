/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function(nums) {
    const gcd = (a, b) => {
        while (b !== 0) {
            const t = a % b;
            a = b;
            b = t;
        }
        return a;
    };
    const lcm = (a, b) => (a / gcd(a, b)) * b;

    let maxVal = 0, allLcm = 1;
    for (const x of nums) {
        maxVal = Math.max(maxVal, x);
        allLcm = lcm(allLcm, x);
    }
    const limit = allLcm * maxVal;
    const n = nums.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        let prod = 1, g = 0, l = 1;
        for (let j = i; j < n; j++) {
            prod *= nums[j];
            g = gcd(g, nums[j]);
            l = lcm(l, nums[j]);
            if (prod === g * l) {
                ans = Math.max(ans, j - i + 1);
            }
            if (prod > limit) {
                break;
            }
        }
    }
    return ans;
};
