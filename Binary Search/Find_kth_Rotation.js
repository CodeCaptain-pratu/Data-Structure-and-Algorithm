/**
 * @param {number[]} arr
 * @returns {number}
 */

Approach :
To find the number of rotations (k) in a sorted and rotated array:

1️⃣ Traverse the array from index 0 to n-2
2️⃣ Check where the order breaks, i.e.,
if arr[i] > arr[i+1], then arr[i+1] is the smallest element
3️⃣ The index of the smallest element gives the number of rotations
   So return i + 1
If no such index is found, the array was not rotated, so return 0

Time complexity : O(n)
Space complexity: O(1)

class Solution {
    findKRotation(arr) {
        // Code Here
        let idx=-1;
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                idx=i;
            }
        }
        return idx+1;
    }
}

/**
 * @param {number[]} arr
 * @returns {number}
 */
/*
Approach 2  : Binary Search 
To find the number of rotations (k) in a sorted and rotated array:

1) Initialize two pointers
l = 0, h = n − 1

2) Check if the current subarray is already sorted
If arr[l] <= arr[h]
The smallest element is at index l, so return l

3) Find the mid index

4) Check if mid is the minimum element (pivot)

Compare with neighbors using circular indexing

If arr[mid] <= arr[prev] and arr[mid] <= arr[next]
 We found the minimum element, return mid

5) Decide which half to search next:

If left half is sorted → arr[l] <= arr[mid]
 Minimum must be in right half → move l = mid + 1

Else → Minimum lies in left half → move h = mid - 1

6) Fallback return 0 (in case array is not rotated)
Time complexity : O(log n)
Space complexity: O(1) 
*/
  
class Solution {
    findKRotation(arr) {
        // Code Here
        let n=arr.length;
        let l=0;
        let h=n-1;
        while(l<=h){
            //if array is already sorted
            if(arr[l]<=arr[h]){
                return l;
            }
            //found minimum at mid
            let mid=Math.floor((l+h)/2);
            let prev=(mid-1+n)%n;
            let next=(mid+1)%n;
            if(arr[mid]<=arr[prev] && arr[mid]<=arr[next]){
                return mid;
            }
            //this means left part is sorted 
            if(arr[l]<=arr[mid]){
                l=mid+1;
            }else{
                h=mid-1;
            }
        }
        return 0;
    }
}
