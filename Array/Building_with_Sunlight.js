/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    visibleBuildings(arr) {
        // code here
        let maxi = -Infinity;
        let count = 0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]>=maxi){
                count++;
                maxi=arr[i];
            }
        }
        return count;
    }
}
