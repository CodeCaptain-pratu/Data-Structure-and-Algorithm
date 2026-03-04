/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
/*Approach 1: Brute Force 
As the problem requires maximum xor of k size subarray 

1) Traverse i = 0 to n - k
2) For each i, calculate XOR of k elements (j = i to i+k-1)
3) Update maxxor = max(maxxor, xor)
4) Return maxxor
Time Complexity  : O(n*k)
Space Complexity : O(1)*/

class Solution {
    maxSubarrayXOR(arr, k) {
        // code here
        let n=arr.length;
        let i=0,j=0;
        let maxxor=0;
        for(let i=0;i<=n-k;i++){
            let xor=0;
            for(let j=i;j<i+k;j++){
                xor^=arr[j];
            }
            maxxor=Math.max(maxxor,xor);
        }
        return maxxor;
    }
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
/*Approach 2 : Sliding Window 
1) Take two pointers i = 0, j = 0
2) Initialize xor = 0
3) Initialize maxxor = -Infinity
4) Compute XOR for the jth element → xor ^= arr[j]
5) If the window size becomes greater than k,
6) Remove the ith element from the window
7) Increment i
9) If the window size becomes equal to k,
   - Update: maxxor = max(maxxor, xor)
10) Increment j
11) Finally, return maxxor

Time Complexity  : O(n) 
Space Complexity : O(1)*/

class Solution {
    maxSubarrayXOR(arr, k) {
        // code here
        let n=arr.length;
        let i=0, j=0;
        let xor=0;
        let maxxor=-Infinity;
        while(j<n){
            xor^=arr[j];
            if(j-i+1>k){
                xor^=arr[i];
                i++;
            }
            if(j-i+1===k){
                maxxor=Math.max(maxxor,
                xor);
            }
            j++;
        }
        return maxxor;
    }
}
