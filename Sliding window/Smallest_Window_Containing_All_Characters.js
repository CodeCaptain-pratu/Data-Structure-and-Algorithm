/**
 * @param {string} s
 * @param {string} p
 * @return {string}
 **/
/*Approach 1: Brute Force 
Time Complexity : O(n^2) 
Space Complexity : O(1)*/

class Solution {
    minWindow(s, p) {
        // code here
        let minlength=Infinity;
        let ans="";
        for(let i=0;i<s.length;i++){
            let mp=new Map();
            for(let k=0;k<p.length;k++){
                let ch=p[k];
                mp.set(ch,(mp.get(ch)||0)+1);
            }
            let count=p.length;
            for(let j=i;j<s.length;j++){
                let char=s[j];
                if(mp.has(char)){
                    if(mp.get(char)>0){
                        count--;
                    }
                    mp.set(char,mp.get(char)-1);
                }
                if(count===0){
                    if(j-i+1<minlength){
                        minlength=j-i+1;
                        ans=s.substring(i,j+1);
                    }
                }
            }
        }
        return ans;
    }
}


/**
 * @param {string} s
 * @param {string} p
 * @return {string}
 **/
/*Approach 2 : Sliding Window 
Time Complexity : O(n) 
Space Complexity : O(k) */

class Solution {
    minWindow(s, p) {
        // code here
        let i=0, j=0, count=p.length;
        let minlen=Infinity;
        let start=0;
        let mp = new Map();
        for(let ch of p){
            mp.set(ch,(mp.get(ch)||0)+1);
        }
        while(j<s.length){
            let ch=s[j];
            if(mp.has(ch)){
                if(mp.get(ch)>0){
                    count--;
                }
                mp.set(ch,(mp.get(ch))-1);
            }
            while(count===0){
                if(j-i+1<minlen){
                    minlen=j-i+1;
                    start=i;
                }
                let leftchar=s[i];
                if(mp.has(leftchar)){
                    mp.set(leftchar,
                    (mp.get(leftchar)||0)+1);
                    if(mp.get(leftchar)>0){
                        count++;
                    }
                }
                i++;
            }
            j++;
        }
        return minlen===Infinity?"":
        s.substring(start,start+minlen);
    }
}

/**
 * @param {string} s
 * @param {string} p
 * @return {string}
 **/
/*Approach 3 - Sliding Window (with optimised space ) 
Time Complexity : O(n) 
Space Complexity : O(26) = O(1)*/

class Solution {
    minWindow(s, p) {
        // code here
        let freq=new Array(26).fill(0);
        for(let ch of p){
            freq[ch.charCodeAt(0) - 97]++;
        }
        let i=0, j=0,start=0;
        let count=p.length;
        let minlen=Infinity;
        while(j<s.length){
            let right=s.charCodeAt(j) - 97;
            if(freq[right]>0){
                count--;
            }
            freq[right]--;
            while(count===0){
                if(j-i+1<minlen){
                    minlen=j-i+1;
                    start=i;
                }
                let left=s.charCodeAt(i)-97;
                freq[left]++;
                if(freq[left]>0){
                    count++;
                }
                i++;
            }
            j++;
        }
        return minlen===Infinity?"":s.substring(start,start+minlen);
    }
}
