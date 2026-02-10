/**
 * @param {number[]} a
 * @param {number[]} b
 * @param {number[]} c
 * @returns {number[]}
 */
/*
### Approach 1 : (Brute Force) 
1) We try all possible triplet by picking one element from each of the three arrays.
2) Traverse array A from index 0 to n.
3) Traverse array B from index 0 to n.
4) Traverse array C from index 0 to n.
5) For every triplet (x,y,z) 
   Find the maximum element 
   Find the minimum element 
   Compute their difference.
6) If the difference is smaller than minimum difference found so far, update the answer 
   triplet 
   - If the difference is same the compare their sum and keep the triplet with the smaller 
     sum (happiest triplet) 
7) Return the triplet in descending order.

Time Complexity  : O(n^3) 
Space Complexity : O(1) 
*/
class Solution {
    smallestDiff(a, b, c) {
        // code here
        let n=a.length;
        let bestdiff=Infinityo;
        let bestsum=Infinity;
        let ans=[]
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                for(let k=0;k<n;k++){
                    let x=a[i], y=b[j], z=c[k];
                    let maxi=Math.max(x,y,z);
                    let mini=Math.min(x,y,z);
                    let diff=maxi-mini;
                    let sum=x+y+z;
                    if(diff<bestdiff || (diff===bestdiff 
                    && sum<bestsum)){
                        bestdiff=diff;
                        bestsum=sum;
                        ans=[x,y,z];
                    }
                }
            }
        }
        ans.sort((a,b)=>b-a);
        return ans;
    }
}


/**
 * @param {number[]} a
 * @param {number[]} b
 * @param {number[]} c
 * @returns {number[]}
 */
/*
Approach 2 : 
1)First sort the array we can effectively control the minimum and maaximum  
2) Take three pointers for three arrays
   i=0, j=0, k=0
3) At each step 
   - Pick elements x = a[i], y = b[j], x = c[k]
   - Find minimum and maximum among them 
   - Compute difference = max - min 
   - Compute sum = x + y + z
4) If the diffference is smaller than minimum difference found so far update the 
   answer triplet 
   - If the difference is same then compare their sum and keep the triplet with smaller
     sum 
5) To reduce the difference move the pointer that currently points to minimum element,
   because increasing the minimum may reduce the gap
6)  If the difference becomes 0 we can stop early as this is the best case.
7)  Return The triplet in descending order

Time Complexity  : O(n logn) + O(n) => O(n logn) 
Space Complexity : O(1) 
*/
class Solution {
    smallestDiff(a, b, c) {
        // code here
        let n=a.length;
        a=[...a].sort((a,b)=>a-b);
        b=[...b].sort((a,b)=>a-b);
        c=[...c].sort((a,b)=>a-b);
        let i=0, j=0, k=0;
        let bestdiff=Infinity;
        let bestsum=Infinity;
        let ans=[];
        while(i<a.length && j<b.length && k<c.length){
            let x=a[i], y=b[j], z=c[k];
            let mini=Math.min(x,y,z);
            let maxi=Math.max(x,y,z);
            let diff=maxi-mini;
            let sum=x+y+z;
            if(diff<bestdiff || (diff===bestdiff &&
            sum<bestsum)){
                bestdiff=diff;
                bestsum=sum;
                ans=[x,y,z];
            }
            if(bestdiff===0){
                break;
            }
            if(x===mini){
                i++;
            }else if(y===mini){
                j++;
            }else{
                k++;
            }
        }
        return ans.sort((a,b)=>b-a);
    }
}
