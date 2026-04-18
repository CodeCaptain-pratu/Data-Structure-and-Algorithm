/**
 * @param number[] arr
 * @returns number
 */
class Solution {
    maxOnes(arr) {
        // code here
       let maxones=0;
       let n = arr.length;
       for(let i=0;i<n;i++){
           for(let j=i;j<n;j++){
               let temp = [...arr];
               for(let k=i;k<=j;k++){
                   temp[k]=temp[k]===1?0:1;
               }
               let count = temp.filter(x => x===1).length;
               maxones = Math.max(maxones, count);
           }
       }
       return maxones;
    }
}

/**
 * @param number[] arr
 * @returns number
 */
class Solution {
    maxOnes(arr) {
        // code here
        let totalones=arr.filter(x=>x===1).length;
        let maxgain=0;
        for(let i=0;i<arr.length;i++){
            let gain=0;
            for(let j=i;j<arr.length;j++){
                if(arr[j]===0){
                    gain++;
                }else{
                    gain--;
                }
            }
            maxgain=Math.max(maxgain,gain);
        }
        return totalones+maxgain;
    }
}

/**
 * @param number[] arr
 * @returns number
 */
class Solution {
    maxOnes(arr) {
        // code here
        let totalones=0;
        for(let num of arr){
            if(num===1){
                totalones++;
            }
        }
        let maxgain=0;
        let currentgain = 0;
        for(let num of arr){
            let val=(num===0)?1:-1;
            currentgain=Math.max(val,
            currentgain+val);
            maxgain = Math.max(maxgain,
            currentgain);
        }
        return totalones+maxgain;
    }
}
