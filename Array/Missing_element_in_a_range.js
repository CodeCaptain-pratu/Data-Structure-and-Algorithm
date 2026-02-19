/*
Approach :

1) We need to find all missing elements in the range [low, high].
2) Insert all elements of the given array into a Set for O(1) lookup.
3) Traverse from low to high:
   - If the current number is not present in the set,
     add it to the result array.
4) Since we traverse from low to high, the result is
   automatically sorted.
Time Complexity  : O(n + (high - low + 1))
Space Complexity : O(n)
*/

class Solution {
    missingRange(arr, low, high) {
        // code here
        let n=arr.length;
        let st = new Set();
        for(let num of arr){
            st.add(num);
        }
        let result=[];
        for(let i=low;i<=high;i++){
            if(!st.has(i)){
                result.push(i);
            }
        }
        return result;
    }
}
