/*
### Approach :
1) A Trionic subsequence follows the pattern.
   Increasing -> Decreasing -> Increasing
2) We use Dynamic Programming with Memoization.
   solve(i,trend) gives the maximum sum starting from index i while
   being in a specific trend phase   
3) Trend Phase 
  - trend 0 -> Not started yet (we can skip elements) 
  - trend 1 -> First Increasing phase 
  - trend 2 -> Decreasing phase 
  - trend 3 -> Final Increasing phase 
4) From trend 0 we are allowed to skip elements until we find a valid 
increasing pair to start the subsequence
5) At each index, we have two choices:
- Skip the element (Only allowed before the sequence starts) 
- Take the element and move on based on comparison with next element 
6) Transitions:
- trend 0 -> trend 1 when nums[i]<nums[i+1]
- trend 1 continues if increasing, move to trend 2 if decreasing
- trend 2 continues if decreasing, move to trend 3 if increasing
- trend 3 continues only if increasing
7) The sequence is valid only if end at trend 3

Time Complexity  : O(n) 
Space Complexity : O(n*4) => O(n) 
*/
var maxSumTrionic = function(nums) {
    const NEG = -1e15;
    const n = nums.length;

    let memo = Array.from({ length: n }, () => Array(4).fill(null));

    function solve(i, trend) {
        if (i === n) {
            return trend === 3 ? 0 : NEG;
        }

        if (memo[i][trend] !== null) {
            return memo[i][trend];
        }

        let take = NEG;
        let skip = NEG;

        if (trend === 0) {
            skip = solve(i + 1, 0);
        }

        if (trend === 3) {
            take = nums[i];
        }

        if (i + 1 < n) {
            let curr = nums[i];
            let next = nums[i + 1];

            if (trend === 0 && curr < next) {
                take = Math.max(take, curr + solve(i + 1, 1));
            }
            else if (trend === 1) {
                if (curr < next) {
                    take = Math.max(take, curr + solve(i + 1, 1));
                } else if (curr > next) {
                    take = Math.max(take, curr + solve(i + 1, 2));
                }
            }
            else if (trend === 2) {
                if (curr > next) {
                    take = Math.max(take, curr + solve(i + 1, 2));
                } else if (curr < next) {
                    take = Math.max(take, curr + solve(i + 1, 3));
                }
            }
            else if (trend === 3 && curr < next) {
                take = Math.max(take, curr + solve(i + 1, 3));
            }
        }

        return memo[i][trend] = Math.max(take, skip);
    }

    return solve(0, 0);
};
