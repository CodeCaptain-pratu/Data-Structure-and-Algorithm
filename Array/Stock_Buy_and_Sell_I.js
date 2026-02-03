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

/*
Approach 2 : Using Auxilary space
1) Create an array of size n to store the maximum future price for each day to sell the stock (maxToRight)  
2) Traverse the price array from right to left and store the maximum value between current day price and 
next day store maximum
3) Traverse the array from left to right and calculate the profit by substracting the current day price from 
the corresponding maxToRight value. Update maximum profit accordingly.

Time Complexity  : O(n) 
Space Complexity : O(n) 

*/
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

/**
 * @param {number[]} prices
 * @returns {number}
 */
/*Approach 3 : Using constant space 
1) Travese the array from left to right 
2) Keep track of minimum price encountered so far (minSoFar) to determine the best day to buy 
3) For each day calculate the profit by subtracting minSoFar from the current day price
4) Update the maximum profit if the current profit is greater than the previously recorded profit.

Time Complexity  : O(n)
Space Complexity : O(1)
*/
class Solution {
    maxProfit(prices) {
        // your code here
        let n=prices.length;
        let result=-Infinity;
        let minSoFar=Infinity;
        let profit=0;
        for(let i=0;i<n;i++){
            minSoFar=Math.min(minSoFar,prices[i]);
            profit=prices[i]-minSoFar;
            result=Math.max(profit,result);
        }
        return result;
    }
}
