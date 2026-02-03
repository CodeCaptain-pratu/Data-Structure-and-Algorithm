/**
 * @param {number[]} prices
 * @returns {number}
 */
/*
### Max one transaction allowed 
Approach 1 : (Brute Force) 
1) Traverse the array and check for current day (buy) maximum value(sell) is available or not
   from next day
   - If available you will get the profit i.e maximum value - current day value 
   - If not available you won't get the profit i.e max will be current day value - current day 
     value
2) Track the max profit for each day
Time Complexity  : O(n^2)
Space Complexity : O(1) 
*/
class Solution {
    maxProfit(prices) {
        // your code here
        let result=-Infinity;
        for(let i=0;i<prices.length;i++){
            let maxi=prices[i];
            for(let j=i+1;j<prices.length;j++){
                if(prices[j]>maxi){
                    maxi=prices[j]
                }
            }
            result=Math.max(maxi-prices[i],result);
        }
        return result;
    }
}


class Solution {
    maxProfit(prices) {
        // your code here
        let n=prices.length;
        let maxFromRight=new Array(n).fill(-1);
        maxFromRight[n-1]=prices[n-1];
        for(let i=n-2;i>=0;i--){
            maxFromRight[i]=Math.max(maxFromRight[i+1],
            prices[i])
        }
        let result=-Infinity;
        for(let i=0;i<n;i++){
            result=Math.max(result,maxFromRight[i]-
            prices[i]);
        }
        return result;
    }
}
