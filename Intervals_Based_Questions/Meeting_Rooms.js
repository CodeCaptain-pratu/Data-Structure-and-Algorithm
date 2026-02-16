/*
Approach:

1) Sort the intervals based on start time so that
   meetings are processed chronologically.
2) Traverse the intervals and check if the end time 
   of the previous meeting is greater than the start 
   time of the current meeting.
3) If overlap exists, return false.
4) If no overlaps are found, return true.

Time Complexity  : O(n log n)
Space Complexity : O(1)
*/

class Solution {
    canAttend(arr) {
        // Code Here
        arr.sort((a,b)=>a[0]-b[0]);
        for(let i=1;i<arr.length;i++){
            let prevEnd=arr[i-1][1];
            let currStart=arr[i][0];
            if(prevEnd>currStart){
                return false;
            }
        }
        return true;
    }
}
