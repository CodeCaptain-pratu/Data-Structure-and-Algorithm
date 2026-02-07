/**
 * @param {number[]} arr
 * @returns {number}
 */
/*
Approach 1 : (Brute Force) 
1) As the problem asks Maximum configuration and we can rotate the array 
   in n-1 times (where n is the size of the array)
2) For Each rotation we will find the configuration and update maximum 
3) Rotating the array in clockwise direction Each time put the last element 
   at first position of the array and shift the remaining elements of the 
   array to right side in array 
4) Finally return the maximum configuration 

Time Complexity  : O(n^2) 
Space Complexity : O(1)
*/
class Solution {
    maxSum(arr) {
        // code here
        let n=arr.length;
        let maxval=-Infinity;
        for(let r=0;r<n;r++){
            let currval=0;
            for(let i=0;i<n;i++){
                currval+=arr[i]*i;
            }
            maxval=Math.max(maxval,currval);
            let last=arr[n-1];
            for(let i=n-1;i>=0;i--){
                arr[i]=arr[i-1];
            }
            arr[0]=last;
        }
        return maxval;
        
    }
}

/**
 * @param {number[]} arr
 * @returns {number}
 */

/*### Approach 2 : Optimized approach
### Suppose array madhye 3 elements A, B, C ahet with indexes 0,1,2
----> Original Configuration (R₀)
R0​=0⋅A+1⋅B+2⋅C
----> Also find total sum of array:
sum=A+B+C
----> After 1st Clockwise Rotation
Array becomes: C A B
R1=0⋅C+1⋅A+2⋅B
-----> After 2nd Clockwise Rotation
Array becomes: B C A
R2=0⋅B+1⋅C+2⋅A
----> Pattern Observation
a) When we rotate clockwise:
b) Every element’s index increases by 1
c) Last element moves to index 0
d) So its contribution becomes 0 instead of (n−1)

Because of this, we derive relation:
Rk=Rk−1+sum−n⋅arr[n−k]
Where
a) Rₖ = current rotation value
b) Rₖ₋₁ = previous rotation value
c) sum = sum of all array elements
d) arr[n−k] = element that moved from last to front
### Algorithm Steps
1) Compute sum of array
2) Compute R₀ (initial configuration)
3) For k from 1 to n-1
4) Use formula
  - R_k = R_(k-1) + sum - n * arr[n-k]
  - Update maximum

Time Complexity  : O(n) + O(n) = O(2n) = O(n)  
Space Complexity : 0(1) 
*/
  
class Solution {
    maxSum(arr) {
        // code here
        let n=arr.length;
        let config=0, sum=0;
        for(let i=0;i<n;i++){
            sum+=arr[i];
            config+=arr[i]*i;
        }
        let maxConfig=config;
        for(let k=1;k<n;k++){
            config=config+sum-n*arr[n-k];
            maxConfig=Math.max(maxConfig,config);
        }
        return maxConfig;
    }
}
