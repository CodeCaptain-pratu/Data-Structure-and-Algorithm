class Solution {
    replaceElements(arr) {
        // code here
        let n=arr.length;
        let res =new Array(n).fill(0);
        for(let i=0;i<n;i++){
            if(i===0){
                res[0]=arr[0]^arr[1];
            }
            else if(i===n-1){
                res[n-1]=arr[n-1]^arr[n-2];
            }else{
                res[i]=arr[i-1]^arr[i+1];
            }
        }
        for(let i=0;i<n;i++){
            arr[i]=res[i];
        }
    }
}
