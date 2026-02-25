/*Approach 1 : Brute force */
class Solution {
    longestSubarray(arr, k) {
        // Code Here
        let maxLen=0;
        for(let i=0;i<arr.length;i++){
            let lessthank=0, greaterthank=0;
            for(let j=i;j<arr.length;j++){
                if(arr[j]<=k){
                    lessthank++;
                }else if(arr[j]>k){
                    greaterthank++;
                }
                if(greaterthank>lessthank){
                    maxLen=Math.max(maxLen,j-i+1);
                }
            }
        }
        return maxLen;
    }
}
/*Approach 2 : HashMap*/
class Solution {
    longestSubarray(arr, k) {
        // Code Here
        let prefix=0;
        let mp=new Map();
        let maxLen=0;
        for(let i=0;i<arr.length;i++){
            prefix+=arr[i]>k?+1:-1;
            if(prefix>0){
                maxLen=i+1;
            }
            if(!mp.has(prefix)){
                mp.set(prefix,i);
            }
            if(mp.has(prefix-1)){
                let len=i-mp.get(prefix-1);
                maxLen=Math.max(len,maxLen);
            }
        }
        return maxLen;
    }
}
