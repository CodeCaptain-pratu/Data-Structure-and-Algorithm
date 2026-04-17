/**
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function(nums) {
    let mp = new Map();
    let mindiff = Infinity;
    for(let i=0;i<nums.length;i++){
        let num = nums[i];
        if(mp.has(num)){
            mindiff = Math.min(mindiff, Math.abs(i - 
                                mp.get(num)));
        }
        let rev=0;
        while(num>0){
            let r = num % 10;
            rev = rev * 10 + r;
            num = Math.floor(num/10);
        }
        mp.set(rev,i);
    }
    return mindiff===Infinity ? -1 : mindiff;
};
