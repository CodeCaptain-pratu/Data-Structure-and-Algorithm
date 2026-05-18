class Solution {
    maxSum(n) {
        let dp = new Array(n + 1).fill(0);

        for (let i = 0; i <= n; i++) {
            dp[i] = Math.max(
                i,
                dp[Math.floor(i / 2)] +
                dp[Math.floor(i / 3)] +
                dp[Math.floor(i / 4)]
            );
        }

        return dp[n];
    }
}
