/**
 * @param {number[]} arr
 * @return {number[]}
 */
/*Approach 1 : Recursion */
class Solution {
    countBSTs(arr) {
        // Code here
        function countTheBST(nums){
            if(nums.length<=1){
                return 1;
            }
            let total=0;
            for(let i=0;i<nums.length;i++){
                let root=nums[i];
                let left=[];
                let right=[];
                for(let num of nums){
                    if(num<root){
                        left.push(num);
                    }else if(num>root){
                        right.push(num);
                    }
                }
                let leftcount=countTheBST(left);
                let rightcount=countTheBST(right);
                total+=leftcount*rightcount;
            }
            return total;
        }
        let result=[];
        for(let i=0;i<arr.length;i++){
            let root=arr[i];
            let left=[];
            let right=[];
            for(let num of arr){
                if(num<root){
                    left.push(num);
                }else if(num>root){
                    right.push(num);
                }
            }
            let leftcount=countTheBST(left);
            let rightcount=countTheBST(right);
            result.push(leftcount*rightcount);
        }
        return result;
    }
}

/**
 * @param {number[]} arr
 * @return {number[]}
 */
/*Approach 2 : Dynamic Programming*/
class Solution {
    countBSTs(arr) {
        // Code here
        let n=arr.length;
        let v=[...arr].sort((a,b)=>a-b);
        let dp=new Array(n+1).fill(0);
        let mod=1e9+7;
        dp[0]=1;
        dp[1]=1;
        for(let i=2;i<=n;i++){
            for(let j=0;j<i;j++){
                dp[i]=(dp[i]+(dp[j]*dp[i-j-1])%mod)%mod;
            }
        }
        function lowerBound(nums,target){
            let l=0, r=nums.length;
            while(l<r){
                let mid=Math.floor((l+r)/2);
                if(nums[mid]<target){
                    l=mid+1;
                }else{
                    r=mid;
                }
            }
            return l;
        }
        let result=[];
        for(let i=0;i<n;i++){
            let idx=lowerBound(v,arr[i]);
            let leftsize=idx;
            let rightsize=n-1-idx;
            result.push(dp[leftsize]*dp[rightsize]);
        }
        return result;
    }
}
