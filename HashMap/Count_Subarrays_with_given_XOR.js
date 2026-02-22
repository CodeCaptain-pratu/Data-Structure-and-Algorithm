/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
/*Approach 1 : Brute force
As problem said that we have to count the subarrays with given xor
1) Traverse the array from 0 to n-1 
2) Initialize the varible "count" to store the number of valid subarrays  
3) For every index i, consider it as a starting point of a subarray 
4) Initialize a variable xor = 0 
5) Extend the subarray from i to j and keep updating :
   xor = xor ^ arr[j]
6) If xor becomes equal to k, Increment count.
7) After checking all subarrays, return count.

Time Complexity  : O(n^2) 
Space Complexity : O(1)
*/
class Solution {
    subarrayXor(arr, k) {
        // code here
        let count = 0;
        let n=arr.length;
        for(let i=0;i<n;i++){
            let xor=0;
            for(let j=i;j<n;j++){
                xor^=arr[j];
                if(xor===k){
                    count++;
                }
            }
        }
        return count;
    }
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

/*
Approach 2 : Hashmap 
current_xor ^ previous_xor = k 
previous_xor = current_xor ^ k

To count how many subarrays have xor = k 
we store frequencies of prefix xor using hashmap 

1) Create map to store (prefix_xor, frequency)  
   Initialize the map with (0,1) to handle subarrays starting from index 0
2) Initialize 
   xor = 0 (current_xor)
   count = 0 (Count valid subarrays) 
3) Traverse the array 
   - Update the current_xor 
     xor = xor ^ num 
4) Compute required previous_xor :
   - previous_xor = current_xor ^ k 
     xor ^ k 
5) If previous xor exists in map add its frequency to count
6) Store/Update the frequency of current_xor in map 
7) Return the count of valid subarray.

Time Complexity  : O(n) 
Space Complexity : O(n) */

class Solution {
    subarrayXor(arr, k) {
        // code here
        let mp=new Map();
        mp.set(0,1);
        let xor=0;//current xor
        let count=0;// count of Subarray 
        //with k xor 
        for(let num of arr){
            xor^=num;//current xor;
            let x=xor^k;//previous xor 
            if(mp.has(x)){
                count+=mp.get(x);
            }
            mp.set(xor,
            (mp.get(xor)||0)+1);
        }
        return count;
    }
}
