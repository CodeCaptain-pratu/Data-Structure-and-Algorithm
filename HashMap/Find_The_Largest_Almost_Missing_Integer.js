/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
    let n = nums.length;
    let mp = new Map();
    for(let i=0;i<=n-k;i++){
        let st=new Set();
        for(let j=i;j<i+k;j++){
            st.add(nums[j]);
        }
        for(let num of st){
            mp.set(num,(mp.get(num)||0)+1);
        }
    }
    let largest = -1;
    for(let [key,value] of mp){
        if(value===1){
            largest=Math.max(key,largest);
        }
    }
    return largest;
};
