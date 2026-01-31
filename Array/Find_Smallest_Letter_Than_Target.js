/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
/*
### Approach :
1) Traverse the array
2) If you find the letter greater than target return it;
3) If you did not find the letter greater than target in whole
  array then return letter present at 0th index.

Time Complexity  : O(n) 
Space Complexity : O(1)
*/
var nextGreatestLetter = function(letters, target) {
   for(let i=0;i<letters.length;i++){
     if(letters[i]>target){
        return letters[i];
     }
   }
   return letters[0];
};

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
/*
### Approach :
1) As the array is sorted we can apply binary search on it 
2) Take two pointers low and high
3) Start the low pointer with zero and high with last index of an array.
4) Find mid
  - If the letter at mid index is greater than target store the letter in 
  result variable and serach in the left part by doing r=mid-1 if you get 
  greater letter in that part
  - If you don't get greater letter at mmid index then search it in right 
  part of the array by doing l=mid+1;

Time Complexity  : O(log n) 
Space Complexity : O(1)
*/

var nextGreatestLetter = function(letters, target) {
    let result=-1;
    let l=0, r=letters.length-1;
    while(l<=r){
        let mid=Math.floor((l+r)/2);
        if(letters[mid]>target){
            result=letters[mid];
            r=mid-1;
        }
        else{
            l=mid+1;
        }
    } 
    return result===-1?letters[0]:result;
};
