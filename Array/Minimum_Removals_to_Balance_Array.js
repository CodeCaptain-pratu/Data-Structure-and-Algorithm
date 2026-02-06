/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
Approach 1 (Brute Force) 
1) To easily get maximum and minimum values of the subarray sort the array.
2) As per problem if max > k*min that subarray is not balanced.
3) We need to find the longest subarray that satisfies the rule, because 
   remaining elements can be removed 
4) Traverse the array from index 0 to n-1
5) Initialize mini = nums[i] (since array is sorted this is the minimum) 
6) Traverse from index i to n-1 using another loop 
7) Since the array is sorted nums[j] will be the maximum in the current 
   subarray.
8) Keep extending the subarray by moving j forward.
9) If nums[j]<=k*nums[i] update :
   maxlen = max(maxle, j-i+1)
10) If nums[j]>k*nums[i] break the inner loop since further elements will
    also be larger.
11) Finally the answer is 
    Removals = n - maxlen 
Time Complexity  : O(n^2) 
Space Complexity : 0(1) 
*/

var minRemoval = function(nums, k) {
    let n=nums.length;
    nums.sort((a,b)=>a-b);
    let maxlen=0;
    for(let i=0;i<n;i++){
        let mini=nums[i];
        let maxi=nums[i];
        for(let j=i;j<n;j++){
            maxi=nums[j];
            if(maxi<=k*mini){
                maxlen=Math.max(maxlen,j-i+1);
            
            }
            else{
                break;
            }
        }
    }
    return n-maxlen;
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
Approach 2 : Sliding window 
1) To easily get maximum and minimum values of the subarray sort the array.
2) Use two pointers to form a window 
   i=0 (start a window) j=0(end a window) 
3) Traverse the array by increasing j from 0 to n-1
4) Since the array is sorted :
   nums[i] = minimum in current window 
   nums[j] = maximum in current window
5) If the window becomed invalid (nums[j] > k*nums[i]
   move the i pointer forward until the condition becomes valid again  
6) Once valid update the maximum window size :
   maxLen = max(maxLen, j-i+1) 
7) Continue the process untill j reaches the end
8) Elements to remove = n - maxLen

Time Complexity   : O(n) 
Space Complexity  : O(1) 
*/
var minRemoval = function(nums, k) {
    let n=nums.length;
    nums.sort((a,b)=>a-b);
    let i=0, j=0;
    let mini=nums[i], maxi=nums[j];
    let maxlen=0;
    while(j<n){
        mini=nums[i];
        maxi=nums[j];
        while(maxi>k*mini){
            i++;
            mini=nums[i];
        }
        maxlen=Math.max(maxlen,j-i+1);
        j++;
    }
    return n-maxlen;
};
