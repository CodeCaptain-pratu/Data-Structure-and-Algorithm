Approach 1 : Recursion  
class Solution {
    noOfWays(m, n, x) {
        // code here
        function solve(dice,sum){
            if(dice===0 && sum===0){
                return 1;
            }
            if(dice===0 || sum<0){
                return 0;
            }
            let ways=0;
            for(let i=1;i<=m;i++){
                ways+=solve(dice-1,
                sum-i);
            }
            return ways;
        }
        return solve(n,x);
    }
}
Approach 2 : Memoization 
class Solution {
    noOfWays(m, n, x) {
        // code here
        let dp=Array.from({length:n+1},
        ()=>Array(x+1).fill(-1));
        function solve(dice,sum){
            if(dice===0 && sum===0){
                return 1;
            }
            if(dice===0 || sum<0){
                return 0;
            }
            if(dp[dice][sum]!==-1){
                return dp[dice][sum];
            }
            let ways=0;
            for(let i=1;i<=m;i++){
                ways+=solve(dice-1,
                sum-i);
            }
            dp[dice][sum]=ways;
            return ways;
        }
        return solve(n,x);
    }
}

Approach 3 : Bottom Up
class Solution {
    noOfWays(m, n, x) {
        // code here
        let dp=Array.from({length:n+1},
        ()=>Array(x+1).fill(0));
        dp[0][0]=1;
        for(let i=1;i<=n;i++){
            for(let j=1;j<=x;j++){
                for(let k=1;k<=m;k++){
                    if(j-k>=0){
                        dp[i][j]+=
                        dp[i-1][j-k];
                    }
                }
            }
        }
        return dp[n][x];
    }
}
