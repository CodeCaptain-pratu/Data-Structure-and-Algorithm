/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
/*
### Approach 1 : Brute Force 
This problem is exactly similer to longest subarray containing at most k zeros.
 
1) Traverse the index i from 0 to n, This willbe the starting point of subarray.
2) Initialize zero count = 0 for each starting index
3) Traverse j from 0 to n to form subarrays 
4) If arr[i]===0 increment the zero count
5) If zero count exceeds k break the loop 
6) Otherwise update the maxlen = max(maxlen,j-i+1) 
7) Return the maxlen.

Time Complexity  : O(n^2) 
Space Complexity : O(1)
*/
class Solution {
    maxOnes(arr, k) {
        // code here
        let n=arr.length;
        let maxlen=0;
        for(let i=0;i<n;i++){
            let len=0,zero=0;
            for(let j=i;j<n;j++){
                if(arr[j]===0){
                    zero++;
                }
                if(zero>k){
                    break;
                }
                if(zero<=k){
                    len=j-i+1;
                    maxlen=Math.max(maxlen,len);
                }
            }
            
        }
        return maxlen;
    }
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
/*
### Approach 2 : Sliding Window

1) Take two pointers i (left) and j (right), both starting at index 0.
2) Traverse the array using j.  
   If arr[j] == 0, increment the zero count.
3) While zero count exceeds k, move the left pointer i forward.  
   If arr[i] == 0, decrement the zero count.
4) At every step where zero count ≤ k, update:
   maxLen = max(maxLen, j - i + 1)
5) Continue moving j until the end of the array.
6) Return maxLen.

Time Complexity  : O(n)+O(n) => O(2n)   
Space Complexity : O(1)
*/
class Solution {
    maxOnes(arr, k) {
        // code here
        let n=arr.length;
        let i=0, j=0;
        let maxlen=0, zero=0;
        while(j<n){
            if(arr[j]===0){
                zero++;
            }
            while(zero>k){
                if(arr[i]===0){
                    zero--;
                }
                i++;
            }
            maxlen=Math.max(maxlen,j-i+1);
            j++;
        }
        return maxlen;
    }
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
/*
Approach 3 - Two pointers
1) Initialize two pointers:
  - i → Left boundary of the window
  - j → Right boundary of the window
    Also maintain:
    zero → Count of zeros in the current window
    maxlen → Stores the maximum valid window length found
2) Expand the window by moving the right pointer j from 0 to n - 1.
    If arr[j] == 0, increment the zero count.
3) If the zero count becomes greater than k, shrink the window from the left:
    If arr[i] == 0, decrement the zero count.
4) Move the left pointer i forward.
    Whenever zero <= k, the current window is valid.
    Update the maximum length:
    maxlen = Math.max(maxlen, j - i + 1)
5) Continue this process until the right pointer reaches the end of the array.
6) Return maxlen, which represents the maximum number of consecutive 1s that can be obtained after flipping at most k zeros.

Time Complexity  : O(n) 
Space Complexity : O(1)
*/
class Solution {
    maxOnes(arr, k) {
        // code here
        let n=arr.length;
        let i=0, j=0;
        let maxlen=0, zero=0;
        while(j<n){
            if(arr[j]===0){
                zero++;
            }
            if(zero>k){
                if(arr[i]===0){
                    zero--;
                }
                i++;
            }
            if(zero<=k){
                maxlen=Math.max(j-i+1,maxlen);
            }
            j++;
        }
        return maxlen;
    }
}
