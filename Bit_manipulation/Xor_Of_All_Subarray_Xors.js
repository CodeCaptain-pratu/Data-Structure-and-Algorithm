class Solution {
    subarrayXor(arr) {
        let ans = 0;
        let n = arr.length;

        for (let i = 0; i < n; i++) {
            if ((i + 1) % 2 !== 0 && (n - i) % 2 !== 0) {
                ans = ans ^ arr[i];
            }
        }

        return ans;
    }
}
