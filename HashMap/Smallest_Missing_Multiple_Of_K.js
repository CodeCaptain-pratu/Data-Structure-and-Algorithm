/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    let mp = new Map();
    let n = nums.length;
    for(let i=0;i<n;i++){
        let num = nums[i];
        mp.set(num,i);
    }
    let counter=1;
    while(counter<=n){
        let ans = counter*k;
        if(!mp.has(ans)){
            return ans;
        }
        counter++;
    }
    return (n+1)*k;
};
