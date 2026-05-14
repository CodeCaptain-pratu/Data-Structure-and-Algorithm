/**
 * @param {number[]} nums
 * @return {boolean}
 */
//Approach 1 : 
var isGood = function(nums) {
    let mp = new Map();
    let max=-Infinity;
    for(let num of nums){
        mp.set(num,(mp.get(num)||0)+1);
        max=Math.max(num,max);
    }
    if(nums.length!==max+1){
        return false;
    }
    for(let i=1;i<max;i++){
        if(mp.get(i)!==1){
            return false;
        }
    }
    return mp.get(max)===2;
};
