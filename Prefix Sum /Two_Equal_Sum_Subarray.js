class Solution {
    canSplit(arr) {
        // code here
        let n=arr.length;
        let left = 0;
        for(let i=0; i<n; i++){
            left+=arr[i];
        }
        let right = 0;
        for(let i = n-1; i>=0; i--){
            right+=arr[i];
            left-=arr[i];
            if(left===right){
                return true;
            }
        }
        return false;
    }
}
