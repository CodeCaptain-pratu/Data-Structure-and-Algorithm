class Solution {
    minToggle(arr) {
        // code here
        let totalzero = 0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]===0){
                totalzero++;
            }
        }
        let leftone=0;
        let rightzero=totalzero;
        let ans=totalzero;
        for(let i=0;i<arr.length;i++){
            if(arr[i]===1){
                leftone++;
            }else{
                rightzero--;
            }
            ans=Math.min(ans,leftone+
            rightzero);
        }
        return ans;
    }
}
