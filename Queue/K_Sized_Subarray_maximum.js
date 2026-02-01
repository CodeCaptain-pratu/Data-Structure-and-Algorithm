
/*
### Approach 1: Brute Force
1) Traverse the array using pointer i to start each k-sized subarray.
2) For every subarray, initialize a variable `maxi` with arr[i].
3) Use another pointer j from i to i+k-1 to find the maximum element.
4) Store the maximum for each window in the result array.

Time Complexity  : O(n * k)
Space Complexity : O(1)
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
class Solution {
    maxOfSubarrays(arr, k) {
        // code here
        let n=arr.length;
        let result=[];
        for(let i=0;i<=n-k;i++){
            let maxi=arr[i];
            for(let j=i;j<i+k;j++){
                maxi=Math.max(arr[j],
                maxi);
            }
            result.push(maxi);
        }
        return result;
    }
}


/*### Approach 2: Deque (Optimal - Sliding Window Maximum)
1) Create a deque to store indices of useful elements.
2) Remove indices from the front if they are out of the current window.
3) Remove indices from the back while their corresponding values are
   smaller than the current element (they can't be maximum).
4) Push the current index into the deque.
5) Once the first window of size k is formed, the front of the deque
   contains the index of the maximum element. Add it to the result.

Time Complexity  : O(n)
Space Complexity : O(k)
*/

class Solution {
    maxOfSubarrays(arr, k) {
        let n = arr.length;
        let result = [];

        for (let i = 0; i <= n - k; i++) {
            let maxi = arr[i];

            for (let j = i; j < i + k; j++) {
                maxi = Math.max(arr[j], maxi);
            }

            result.push(maxi);
        }

        return result;
    }
}
