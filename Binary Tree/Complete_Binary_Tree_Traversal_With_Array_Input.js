/**
 * @param {number[]} arr
 * @return {number[][]}
 */
class Solution {
    levelSort(arr) {
        // code here
        let level = 1;
        let i = 0;
        let ans = [];
        while(i<arr.length){
            let temp = arr.slice(i,i+level);
            temp.sort((a,b)=>a-b);
            ans.push(temp);
            i+=level;
            level*=2;
        }
        return ans;
    }
}
