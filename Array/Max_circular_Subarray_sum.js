/*
 * @param {number[]} arr
 * @returns {number}
 */
 /**/
/*
Approach 1 : (Using kadane's Algorithm)
1) Use kadane's algorithm to find Maximum sum.
2) Use kadane's algorithm to find Minimum sum.
3) Compute the total sum of an array.
4) The maximum Subarray sum is -
   Total sum - minimum Subarray sum
5) If the maximum Subarray sum is positive then return 
   the maximum of 
   - Normal maximum Subarray sum
   - Maximum circular Subarray sum
6) If all elements are negative then return the maximum 
Subarray sum
Time Complexity  : O(n)
Space Complexity : O(1)
*/

class Solution {
    kadanesMaxSum(arr){
        let maxsum=-Infinity;
        let sum=0;
        for(let i=0;i<arr.length;i++){
            sum=Math.max(sum+arr[i],arr[i]);
            maxsum=Math.max(maxsum,sum);
        }
        return maxsum;
    }
    kadanesMinSum(arr){
        let minsum=Infinity;
        let sum=0;
        for(let i=0;i<arr.length;i++){
            sum=Math.min(sum+arr[i],arr[i]);
            minsum=Math.min(minsum,sum);
        }
        return minsum;
    }
    maxCircularSum(arr) {
        // code here
        let n=arr.length;
        let totalSum=arr.reduce((acc,sum)=>
        acc+sum,0);
        let minsum=this.kadanesMinSum(arr);
        let maxsum=this.kadanesMaxSum(arr);
        let circularSum=totalSum-minsum;
        if(maxsum>0){
            return Math.max(circularSum,
            maxsum);
        }
        return maxsum;
    }
}
