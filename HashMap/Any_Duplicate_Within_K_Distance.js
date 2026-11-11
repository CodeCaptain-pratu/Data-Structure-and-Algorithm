/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */

class Solution {
    checkWithinK(arr, k) {
        // code here
        let mp = new Map();
        for(let i=0;i<arr.length;i++){
            if(!mp.has(arr[i])){
                mp.set(arr[i],i);
            }else{
                let idx = mp.get(arr[i]);
                let dist = Math.abs(i-idx);
                if(dist<=k){
                    return true;
                }
                mp.set(arr[i],i);
            }
        }
        return false;
    }
}
