/**
 * @param {number[]} nums
 * @return {number}
 */
//Approach 1 : Brute force 
var minimumDistance = function(nums) {
    let minDist=Infinity;
    let n=nums.length;
    for(let i=0;i<=n-3;i++){
        for(let j=i+1;j<=n-2;j++){
            for(let k=j+1;k<=n-1;k++){
                if(nums[i]===nums[j] && 
                nums[j]===nums[k]){
                    minDist=Math.min(minDist,
                    Math.abs(i-j)+Math.abs(j-k)+
                    Math.abs(i-k));
                }
            }
        }
    }
    return minDist===Infinity?-1:minDist;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
//Approach 2 : Using HashMap 
var minimumDistance = function(nums) {
    let mp=new Map();
    let n=nums.length;
    for(let i=0;i<n;i++){
        if(!mp.has(nums[i])){
            mp.set(nums[i],[]);
        }
        mp.get(nums[i]).push(i);
    }
    let minDist=Infinity;
    for(let indices of mp.values()){
        if(indices.length>=3){
            for(let i=0;i<=indices.length-3;i++){
                dist=2*(indices[i+2]-indices[i]);
                minDist=Math.min(minDist,
                dist);
            }
        }
    }
    return minDist===Infinity?-1:minDist;
};

//Approach 3 : Using HashMap 
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    let n=nums.length;
    let mp=new Map();
    let minDist=Infinity;
    for(let k=0;k<n;k++){
        if(!mp.has(nums[k])){
            mp.set(nums[k],[]);
        }
        mp.get(nums[k]).push(k);
        if(mp.get(nums[k]).length>=3){
            let arr=mp.get(nums[k]);
            let size=arr.length;
            let i=arr[size-3];
            minDist=Math.min(minDist,2*(k-i));
        }
    }
    return minDist===Infinity?-1:minDist;
};
