class Solution {
    countPartitions(arr, diff) {
        /*
            total = s1 + s2
            s1 - s2 = diff
            
            => 2*s1 = total + diff
            => s1 = (total + diff) / 2
        */
        
        const total = arr.reduce((sum, val) => sum + val, 0);
        const v = total + diff;
        
        // जर odd असेल तर possible नाही
        if (v % 2 !== 0) return 0;
        
        const target = Math.floor(v / 2);
        const n = arr.length;
        
        const dp = new Map();
        
        function f(ind, target) {
            if (target === 0) return 1;
            if (ind >= n) return 0;
            
            const key = ind + "," + target;
            if (dp.has(key)) return dp.get(key);
            
            let p1 = 0, p2 = 0;
            
            // include
            if (target >= arr[ind]) {
                p1 = f(ind + 1, target - arr[ind]);
            }
            
            // exclude
            p2 = f(ind + 1, target);
            
            dp.set(key, p1 + p2);
            return p1 + p2;
        }
        
        arr.sort((a, b) => a - b);
        return f(0, target);
    }
}

class Solution {
    countPartitions(arr, diff) {
        const total = arr.reduce((sum, val) => sum + val, 0);
        const v = total + diff;

        
        if (v % 2 !== 0) return 0;

        const target = Math.floor(v / 2);
        const n = arr.length;

        let dp = Array.from({ length: n + 1 }, () => 
            new Array(target + 1).fill(0)
        );

        // base case
        dp[0][0] = 1;

        for (let i = 1; i <= n; i++) {
            for (let j = 0; j <= target; j++) {
                
                // exclude
                dp[i][j] = dp[i - 1][j];

                // include
                if (j >= arr[i - 1]) {
                    dp[i][j] += dp[i - 1][j - arr[i - 1]];
                }
            }
        }

        return dp[n][target];
    }
}
