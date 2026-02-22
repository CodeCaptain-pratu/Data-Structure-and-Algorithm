/**
 * @param {number} n
 * @return {number}
 */

/*
Approach : - Brute Force 
1) Convert the given number into its binary representation 
   and store it as 
2) Traverse the binary string from left to right
3) Initialize two varible previous and current with -1.
   - Prev = -1  (Index of previous set bit/1)
   - Curr = -1 (Index of current set bit/1)
4) Whenever set bit "1" is found update -
   - prev = curr
   - curr = current index
5) If previous is valid (prev!==-1) update :
   distance = max(distance, curr-prev) 
6) Return the maximum distance obtained.

Time Complexity  : O(log n) + O(log n) = O(2 log n ) => O(log n) 
Space Complexity : O(log n) */

var binaryGap = function(n) {
     let result = "";
     while(n>0){
         result+=n%2;
         n=Math.floor(n/2);
     }
    let prev=-1, curr=-1;
    let dist=0;
    for(let i=0;i<result.length;i++){
        if(result[i]==="1"){
            prev=curr;
            curr=i;
        }
        if(prev!==-1){
         dist=Math.max(dist,curr-prev);
        }
    }
    return dist;
};
