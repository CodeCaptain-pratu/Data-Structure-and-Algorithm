/*
### Approach :
1) Suppose If we have n=3 
  - The ant(A) going to right direction is at index 0 (time=0) 
  - The ant(B) going to left direction is at index 2 (time=0)
      A->     <-B
     ___  ___  ___
      0    1    2
  - Both ant will collide and change thier direction at index 1 (time = 1) 
    -    <-A
           B->
     ___  ___  ___
      0    1    2
  - Again ant(A) will be again at index 0 and ant(B) will again at index(2) (time=2) 
  - From there the ants will fall out, So we neet time=2 for it 
2) From above example it is clear that the 
  - ants moving in left direction take time the index at which ant is standing
  - ants moving in right direction take time (n-the index at which ant is standing) 
  - We will get the Last momemnt from maximum of ants moving in left direction and
    ants moving in right direction 
*/
class Solution {
    getLastMoment(n, left, right) {
        // code here
        let result = -Infinity;
        for(let i=0;i<left.length;i++){
            result=Math.max(result,left[i]);
        }
        for(let j=0;j<right.length;j++){
            result=Math.max(result,
            n-right[j]);
        }
        return result;
    }
}
