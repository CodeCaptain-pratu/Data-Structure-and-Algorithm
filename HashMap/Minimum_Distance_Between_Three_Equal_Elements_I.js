/**
 * @param {number[]} nums
 * @return {number}
 */
//Approach 1 : Brute force 
var minimumDistance = function(nums) {
    let mp=new Map();
    for(let i=0;i<nums.length;i++){
        if(!mp.has(nums[i])){
            mp.set(nums[i],[]);
        }
        mp.get(nums[i]).push(i);
    }
    let minDist=Infinity;
    for(let indices of mp.values()){
        if(indices.length>=3){
            for(let i=0;i<=indices.length-3;i++){
                let dist=2*(indices[i+2]-indices[i]);
                minDist=Math.min(minDist,dist);
            }
        }
    }
    return minDist===Infinity?-1:minDist;
};
//Approach 2 : Using Map 
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    let mp=new Map();
    for(let i=0;i<nums.length;i++){
        if(!mp.has(nums[i])){
            mp.set(nums[i],[]);
        }
        mp.get(nums[i]).push(i);
    }
    let minDist=Infinity;
    for(let indices of mp.values()){
        if(indices.length>=3){
            for(let i=0;i<=indices.length-3;i++){
                let dist=2*(indices[i+2]-indices[i]);
                minDist=Math.min(minDist,dist);
            }
        }
    }
    return minDist===Infinity?-1:minDist;
};
