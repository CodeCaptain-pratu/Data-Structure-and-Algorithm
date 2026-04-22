/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
//Approach 1 : Brute Force 
class Solution {
    findMean(arr, queries) {
        // code here
        function sum(l,r){
            let sum = 0;
            for(let i=l;i<=r;i++){
                sum+=arr[i];
            }
            return Math.floor(sum/(r-l+1));
        }
        let result = [];
        for(let [l,r] of queries){
            let ans=sum(l,r);
            result.push(ans);
        }
        return result;
    }
}

/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */

//Approach 2 : Using Prefix sum 
class Solution {
    findMean(arr, queries) {
        // code here
        let n = arr.length;
        let prefix = new Array(n).fill(0);
        prefix[0]=arr[0];
        for(let i=1;i<n;i++){
            prefix[i]=prefix[i-1]+arr[i];
        }
        let result = [];
        for(let i=0; i<queries.length; i++){
            let l=queries[i][0];
            let r=queries[i][1];
            let sum=0;
            if(l===0){
                sum=prefix[r];
            }else{
                sum = prefix[r] - prefix[l-1];
            }
            sum = Math.floor(sum/(r-l+1));
            result.push(sum);
        }
        return result;
    }
}
