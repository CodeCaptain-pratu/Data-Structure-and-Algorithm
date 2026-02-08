/**
 * @param {number[]} arr
 * @return {number}
 */
/*Approach : (Brute force)
1) Intialize the the maxproduct with - Infinity 
2) Traverse index i from 0 to n-1
3) Initialize product with 1
4) Traverse index j from i to n-1
5) Multiply product with arr[j]
6) Update the maxproduct ; 
   maxproduct = max (maxproduct, product)
7) Return the maxproduct finally 

Time complexity  : O(n^2)
Space complexity : O(1)
*/

class Solution {
    maxProduct(arr) {
        // code here
       let n=arr.length;
       let maxproduct=-Infinity;
       for(let i=0;i<n;i++){
           let product=1;
           for(let j=i;j<n;j++){
               product*=arr[j];
               maxproduct=Math.max(product,
               maxproduct);
           }
       }
       return maxproduct;
    }
}

/**
 * @param {number[]} arr
 * @return {number}
 */
/*Approach 2 :
1) We find the subarray from left to right and right to 
   left using prefix and suffix 
2) There are three cases : 
   All elements are positive: max product will be product 
   of all element
   even number of negative elements : When both elements 
   pair of elements include in Subarray that may give you
   max product 
   odd number of negative elements: When one negative 
   element is ignored the other part may give max product 
3) In prefix variable multiply the element from left if 0 
   is then start with fresh Subarray (i.e Initialize the
   prefix with 1) 
4) In suffix variable multiply the element from right if 0 
   is then start with fresh Subarray (i.e Initialize the
   sufgix with 1)
5) Return the maxproduct Finally 

Time complexity : O(n)
Space complexity:O(1) */

class Solution {
    maxProduct(arr) {
        // code here
        let n=arr.length;
        let suffix = 1;
        let prefix = 1;
        let maxproduct=-Infinity;
        for(let i=0;i<n;i++){
            if(prefix===0){
                prefix=1;
            }
            if(suffix===0){
                suffix=1;
            }
            prefix*=arr[i];
            suffix*=arr[n-i-1],
            maxproduct=Math.max(
            maxproduct,
            Math.max(prefix,suffix));
        }
        return maxproduct;
    }
}
