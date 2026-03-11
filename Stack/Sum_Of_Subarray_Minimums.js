
/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    sumSubMins(arr) {
        // code here
        let n = arr.length;
        let sum=0;
        for(let i=0;i<n;i++){
            let  mini=Infinity;
            for(let j=i;j<n;j++){
                mini=Math.min(mini,arr[j]);
                sum+=mini;
            }
        }
        return sum;
    }
}
/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    getNSL(arr){
        let n = arr.length
        let left=new Array(n);
        let st=[];
        for(let i=0;i<n;i++){
            while(st.length && arr[i]<arr[st[st.length-1]]){
                st.pop();
            }
            left[i]=st.length===0?-1:st[st.length-1];
            st.push(i);
        }
        return left;
    }
    getNSR(arr){
        let n = arr.length;
        let right = new Array(n);
        let st=[];
        for(let i=n-1;i>=0;i--){
            while(st.length && arr[i]<=arr[st[st.length-1]]){
                st.pop();
            }
            right[i]=st.length===0?n:st[st.length-1];
            st.push(i);
        }
        return right;
    }
    sumSubMins(arr) {
        // code here
        let NSL=this.getNSL(arr);
        let NSR=this.getNSR(arr);
        let sum=0;
        let n=arr.length;
        for(let i=0;i<n;i++){
            let left=i-NSL[i];
            let right=NSR[i]-i;
            let totalways=left*right;
            let contribution=totalways*arr[i];
            sum+=contribution;
        }
        return sum;
    }
}
