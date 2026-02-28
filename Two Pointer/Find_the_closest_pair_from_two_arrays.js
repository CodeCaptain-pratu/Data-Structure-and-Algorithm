/**
 * @param {number[]} arr
 * @param {number[]} brr
 * @param {number} n
 * @param {number} m
 * @param {number} x
 * @returns {number}
 */

/*Approach 1 : Brute Force 
The problem asked to find the pair (One element from each array) 
Whose sum is closest to the given value x.

1) Traverse array arr1 from index 0 to n-1.
2) For every element of arr1, traverse arr2 from index 0 to m-1.
3) Calculate the sum of each possible pair:
   - sum = arr1[i] + arr2[j]
4) Compute the absolute difference between sum and x : 
   - absDiff = | sum - x |
5) If the absolute difference is smaller than minimum absolute difference
   - Update minAbsDiff 
   - Store the current pair as the closest pair 
6) After checking all the pair return the closest pair stored in result.

Time Complexity   : O(n*m) 
Space Complexity  : O(1)*/  

class Solution {
    findClosestPair(arr1, arr2, x) {
        // your code here
        let n=arr1.length;
        let m=arr2.length;
        let minAbsDiff=Infinity;
        let result=[];
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                let sum=arr1[i]+arr2[j]
                let absDiff=Math.abs(sum-x);
                if(absDiff<minAbsDiff){
                    minAbsDiff=absDiff;
                    result=[arr1[i],arr2[j]];
                }
            }
        }
        return result;
    }
}


/**
 * @param {number[]} arr
 * @param {number[]} brr
 * @param {number} n
 * @param {number} m
 * @param {number} x
 * @returns {number}
 */

/*Approach 2 : Two Pointer
Since both arrays are sorted, we use the two pointer technique,
to efficiently find the pair whose sum is closest to x.
1) Initialize the two pointers,
   - i = 0 (start from arr1) 
   - j = m -1 (end from arr2) 
2) While i<j && j>=0 
   - Compute sum = arr1[i] + arr2[j]
   - Find the absolute difference 
     - absDiff = | sum - x |
3) If absDiff < minAbsDiff 
   - Update the minAbsDiff
   - Store the current pair 
4) If sum < x :
   - Increase i to make sum larger (i++)
5) Else sum > x :
   - Decrease j to make sum smaller (j--)
5) Compare the minimum absolute difference
   - minAbsDiff = min(minAbsDiff, absDiff) 
6) Continue untill pointers go out of range
7) Returned the stored pair.
  
Time Complexity : O(n+m)
Space Complexity : O(1)*/
  
class Solution {
    findClosestPair(arr1, arr2, x) {
        // your code here
        let n=arr1.length;
        let m=arr2.length;
        let i=0, j=m-1;
        let minAbsDiff=Infinity;
        let result=[];
        while(i<n && j>=0){
            let sum=arr1[i]+arr2[j];
            let absDiff=Math.abs(sum-x);
            if(absDiff<minAbsDiff){
                minAbsDiff=absDiff;
                result=[arr1[i],arr2[j]];
            }
            if(sum<x){
                i++;
            }else{
                j--;
            }
        }
        return result;
    }
}
