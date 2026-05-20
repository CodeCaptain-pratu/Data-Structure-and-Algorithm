/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let mp=new Map();
    for(let num of nums1){
        mp.set(num,(mp.get(num)||0)+1);
    }
    for(let num of nums2){
        if(mp.has(num)){
            return num;
        }
    }
    return -1;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let i=0, j=0;
    while(i<nums1.length && j<nums2.length){
        if(nums1[i]===nums2[j]){
            return nums1[i];
        }
        else if(nums1[i]<nums2[j]){
            i++;
        }
        else{
            j++;
        }
    }
    return -1;
};
