

// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number[]}
 */
/*
Approach :
1) Take two pointers start and end.

2) Initiate the value of start and end with 0 and last index of array respectively.

3) Swap the element at start index with element present at end index.

4) Increment the start index and decrement the end index.

5) Do this process till start and ennd index crosses each other.

Time Complexity : O(n) 
Space Complexity : O(1)
*/
class Solution {
    // Function to reverse the array.
    reverseArray(arr) {
        // your code here
        let n=arr.length;
        let start=0;
        let end=n-1;
        while(start<=end){
            let temp=arr[start];
            arr[start]=arr[end];
            arr[end]=temp;
            start++;
            end--;
        }
    }
}
