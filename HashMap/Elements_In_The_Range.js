class Solution {
    checkElements(start, end, arr) {
        // code here
        let mp=new Map();
        for(let i=0;i<arr.length;i++){
            mp.set(arr[i],(mp.get(arr[i])||0)+1);
        }
        for(let i=start;i<=end;i++){
            if(!mp.has(i)){
                return false;
            }
        }
        return true;
    }
}
