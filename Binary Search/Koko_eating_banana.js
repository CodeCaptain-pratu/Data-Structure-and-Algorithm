/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
/* Approach 1 : Linear Search
We want to find the minimum value of s(bananas per hour) such that koko can 
finish all the piles within k hour 
1) As we want to find the min value from the range :
   start = 1 to go till max in the array (Because of it maximum pile get finish in one hour) 
2) If the current speed allows koko to finish within k hours, we return because we are 
   checking speeds in increasing order
3) To check the value taken by is minimum or not we will build a function 
   We calculate total hours require at this speed. If total hours <=k return true
   otherwise false.

Time complexity  : O(n x max(arr)) 
Space complexity : O(1) 
*/

class Solution {
    findMinHours(mid,arr,k){
        let exacthours=0;
        for(let i=0;i<arr.length;i++){
            exacthours+=Math.floor(arr[i]/mid);
            if(Math.floor(arr[i]%mid)!==0){
                exacthours++;
            }
        }
        return exacthours<=k;
    }
    kokoEat(arr, k) {
        // code here
        let n=arr.length;
        let maxi=Math.max(...arr);
        for(let i=1;i<=maxi;i++){
            if(this.findMinHours(i,arr,k)){
                return i;
            }
        }
        return -1;
    }
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
/*
Approach 2 : Binary Search 
We want to find the minimum value of s(bananas per hour) such that koko can 
1) As we want to find the min value from the range :
  - Minimum possible speed = 1
  - Maximum possible speed = max(arr)
    Because if Koko eats at a speed equal to the largest pile, that pile will 
    finish in 1 hour.
    Since we are searching for a minimum valid value, instead of checking every value 
    linearly, we use Binary Search for better performance
2) Take two pointers :
   - l=1, h=max value in array 
   - While l < h
     - Find mid => mid = floor((l + h) / 2)
     - Check if this speed is valid (can finish within k hours)
     - If mid is valid (hours ≤ k)
     - Try to find a smaller valid speed on the left, h=mid
     - If mid is not valid:→ Speed is too slow, increase it, l = mid + 1
     - Loop runs until l == h, which gives the minimum valid speed.
   - If mid is the minimum value then we can check we do we get min value at left by doing
     h=mid 
   - If mid is the not the minimum value then move l=mid+1
   - Do it till l < h 
  3) Validity Check Function
   - To check whether a speed is valid:
     - For each pile:
     - hours += ceil(pile / speed)
   - If total hours ≤ k → return true
   - Else → return false

Time Complexity  : O(n log max(arr))
Space complexity : O(1)
*/

class Solution {
    findMinHours(mid,arr,k){
        let exactHours=0;
        for(let i=0;i<arr.length;i++){
            exactHours+=Math.ceil(arr[i]/mid);
        }
        return exactHours<=k;
    }
    kokoEat(arr, k) {
        // code here
        let maxi=Math.max(...arr);
        let l=1, h=maxi;
        while(l<h){
            let mid=Math.floor((l+h)/2);
            if(this.findMinHours(mid,arr,k)){
                h=mid;
            }else{
               l=mid+1;   
            }
        }
        return h;//you can return l or h any of them 
    }
}
