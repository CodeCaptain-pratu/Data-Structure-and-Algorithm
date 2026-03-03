/**
 * @param {number[]} arr
 * @returns {number}
 */

/*Approach : Brute force 
Since the problem asks to find the length of the longest subarray with at most 2 distinct integers:

1) Traverse the array from i = 0 to n - 1.
2) For each index i, consider it as the starting 
   point of a subarray.
3) Create a frequency map to track distinct elements 
   in the current subarray.
4) Extend the subarray by moving j from i to n - 1.
5) Add the current element into the map and increase its frequency.
6) If map.size <= 2, update
maxLen = max(maxLen, j - i + 1)
7) If map.size > 2, break the inner loop since the condition is violated.
8) Finally, return maxLen.*/

class Solution {
    totalElements(arr) {
        // code here
        let maxlen=0;
        let n=arr.length;
        for(let i=0;i<n;i++){
            let mp=new Map();
            for(let j=i;j<n;j++){
                mp.set(arr[j],
                (mp.get(arr[j])||0)+1);
                if(mp.size>2){
                    break;
                }
                maxlen=Math.max(maxlen,
                j-i+1);
            }
        }
        return maxlen;
    }
}

Time complexity : O(n^2)
Space complexity: O(1)
/**
 * @param {number[]} arr
 * @returns {number}
 */

/*Approach 2: Sliding Window
1) Initialize two pointers i = 0 and j = 0.
2) Create a frequency Map to store elements in the current window.
3) Initialize maxLen = 0.
4) Traverse the array using pointer j.
5) Add the element at index j into the map and increase its frequency.
6) If map.size > 2, shrink the window from the left:
7) Decrease the frequency of element at index i
8) If its frequency becomes 0, delete it from the map
9) Move pointer i forward
10 After ensuring map.size <= 2, update:
maxLen = max(maxLen, j - i + 1)
11) Move pointer j forward.
12) Finally, return maxLen.

Time complexity  : O(n)
Space complexity : O(1)*/

class Solution {
    totalElements(arr) {
        // code here
        let n=arr.length;
        let mp=new Map();
        let i=0, j=0;
        let maxlen=0;
        while(j<n){
            let num=arr[j];
            mp.set(num,(mp.get(num)||0)+1);
            while(mp.size>2){
                let num2=arr[i];
                mp.set(num2,
                (mp.get(num2)||0)-1);
                if(mp.get(num2)===0){
                    mp.delete(num2);
                }
                i++;
            }
            maxlen=Math.max(maxlen,j-i+1);
            j++;
        }
        return maxlen;
    }
}
