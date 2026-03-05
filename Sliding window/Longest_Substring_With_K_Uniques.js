/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */
/*Approach 1 : Brute Force 
Since the problem asks to find the longest substring containing exactly 
k distinct characters, we check every possible substring
1) Traverse the string i=0 to n to consider every starting index
2) For each starting index i traverse the string from j=i to n-1
3) Initialize the set for every new starting index i to store the 
   distinct characters 
4) Add character at s[j] to set 
5) If set size === k update : 
   maxlen = max(maxlen, j-i+1)
6) If set size > k break the inner loop since further expansion will
   only increase distinct characters 
7) Return the maxlen finally 

Time Complexity : O(n^2) 
Space Complexity : O(k)*/

class Solution {
    longestKSubstr(s, k) {
        // code here
        let n=s.length; 
        let maxlen=-1;
        for(let i=0;i<n;i++){
            let st=new Set();
            for(let j=i;j<n;j++){
                st.add(s[j]);
                if(st.size===k){
                    maxlen=Math.max(maxlen,j-i+1);
                }
                if(st.size>k){
                  break;
                }
            }
        }
        return maxlen;
    }
}

/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */

/*Approach 2 : Sliding Window 
1) Initialize maxlen = -1 to handle the case when no substring with 
   distinct characters exist
2) Initialize two pointers i=0 and j=0 to represent the sliding 
   window 
3) Initialize the map to store the distinct characters in the 
   current window 
4) Add the character at index j to map  
5) If map size > k shrink the window from left 
   Decrease the frequency of the character at index i
   If the frequecy becomes 0 remove the character from map 
   Increment i
6) If map size == k, Update :
   - maxlen = max(maxlen, j-i+1) 
7) Increment the j Pointer 
7) Return the maxlen. 

Time Complexity : O(n) 
Space Complexity : O(k) */

class Solution {
    longestKSubstr(s, k) {
        // code here
        let n=s.length;
        let maxlen=-1;
        let i=0, j=0;
        let mp=new Map();
        while(j<n){
            let ch=s[j];
            mp.set(ch,(mp.get(ch)||0)+1);
            while(mp.size>k){
                let ch_=s[i];
                mp.set(ch_,(mp.get(ch_)||0)-1);
                if(mp.get(ch_)===0){
                    mp.delete(ch_);
                }
                i++;
            }
            if(mp.size===k){
                maxlen=Math.max(maxlen,j-i+1);
            }
            j++;
        }
        return maxlen;
    }
}
