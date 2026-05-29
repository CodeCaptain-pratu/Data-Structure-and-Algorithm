/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    function finddigitsum(num){
        let sum=0;
        while(num>0){
            let r = num%10;
            sum+=r;
            num=Math.floor(num/10);
        }
        return sum;
    }
    let mini=Infinity;
    for(let i=0;i<nums.length;i++){
        let digitsum=finddigitsum(nums[i]);
        mini=Math.min(digitsum,mini);
    }
    return mini;
};
