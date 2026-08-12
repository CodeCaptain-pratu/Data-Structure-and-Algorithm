var maxSubarrayLength = function(nums, k) {
    // Intuition: only nums[right] itself can break the window, shrink from left until it fits again
    const n = nums.length;
    let r = 1;
    let left = 0;
    const freq = new Map();
    for (let right = 0; right < n; right++) {
        const c = nums[right];
        freq.set(c, (freq.get(c) || 0) + 1);
        // Decrease window length until k constraint is true again
        while (freq.get(c) > k) {
            const d = nums[left];
            freq.set(d, freq.get(d) - 1);
            left++;
        }
        r = Math.max(r, right - left + 1);
    }
    return r;
};
