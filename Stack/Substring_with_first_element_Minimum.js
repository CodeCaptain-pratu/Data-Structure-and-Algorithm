/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    countSubarrays(arr) {
        // code here
        let n=arr.length;
        let count=0;
        for(let i=0;i<n;i++){
            let firstMin=arr[i];
            for(let j=i;j<n;j++){
                if(arr[j]<firstMin){
                    break;
                }
                count++;
            }
        }
        return count;
    }
}

/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    countSubarrays(arr) {
        // code here
        let n = arr.length;
        let st=[];
        let result=0;
        for(let i=0;i<n;i++){
            while(st.length && arr[i]<arr[st[st.length-1]]){
                let idx=st.pop();
                result+=i-idx;
            }
            st.push(i);
        }
        while(st.length){
            let idx=st.pop();
            result+=n-idx;
        }
        return result;
    }
              }
