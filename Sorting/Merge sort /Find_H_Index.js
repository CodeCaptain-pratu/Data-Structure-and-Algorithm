
 * @param {number[]} citations
 * @returns {number}
 */
/*Approach - Brute force 
The H-index is defined as the maximum value H, such that the researcher has published
at least H papers, and all those papers have citation value greater than or equal to H.
1) Let n be the number of papers 
2) Try every possible value of H from 1 to n 
3) For each H, count how many papers have citations>=H
4) If count >= H then H can be valid H-Index 
5) Keep Updating the maximum valid H
6) Return the finnal H-Index

Time Complexity  : O(n^2) 
Space Complexity : O(1) 
*/
class Solution {
    hIndex(citations) {
        // code here
        let H_Idx=0;
        let n=citations.length;
        for(let paper=1;paper<=n;paper++){
            let count=0;
            for(let i=0;i<n;i++){
                if(citations[i]>=paper){
                    count++;
                }
            }
            if(count>=paper){
                H_Idx=paper;
            }else{
                break;
            }
        }
        return H_Idx;
    }
}

/**
 * @param {number[]} citations
 * @returns {number}
 */

/*Approach 2 - Sorting 
1) Sort The array in descending order 
2) Traverse the sorted array from 0 to n 
3) For each index check if citations[i] >= i+1
4) If true then i+1 can be valid H-Index 
5) Continue updating the maximum valid H-Index 
6) Stop when condition fails and return H.

Time Complexity  : O(n log n) + O(n) => O(n log n)
Space Complexity : O(1) 
*/

class Solution {
    hIndex(citations) {
        // code here
        let h=0;
        citations.sort((a,b)=>b-a);
        for(let i=0;i<citations.length;i++){
            if(citations[i]>i){
                h=i+1;
            }else{
                break;
            }
        }
        return h;
    }
}

/**
 * @param {number[]} citations
 * @returns {number}
 */
/*Approach 3 - Bucket algorithm 
1) Let n be the number of papers 
2) Create a frequency array of size(n+1) Initialized with 0
3) Traverse citations : 
   - If citation > n, Increment frequency of n
   - Otherwise Increment the frequency of citation 
4) Initialize total = 0
5) Traverse the frequency array from n down to 0
   - Add freq[i] in total 
   - Total represents paper having citations >= i
6) If total >= i, then i is the valid H-Index, Return i.
7) If no values satisfies the condition return 0;

Time Complexity  : O(n) 
Space Complexity : O(n) */

class Solution {
    hIndex(citations) {
        // code here
        let n=citations.length;
        let freq= new Array(n+1).fill(0);
        for(let c of citations){
            if(c>n){
                freq[n]++;
            }else{
                freq[c]++;
            }
        }
        let total=0;
        for(let i=n;i>=0;i--){
            total+=freq[i];
            if(total>=i){
                return i;
            }
        }
        return 0;
    }
}
