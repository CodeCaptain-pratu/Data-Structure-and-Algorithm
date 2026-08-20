/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
    let arr1=[];
    let arr2=[];
    if(nums.length>0){
        arr1.push(nums[0]);
    }
    if(nums.length>1){
        arr2.push(nums[1]);
    }
    for(let i=2;i<nums.length;i++){
        let elem1=arr1[arr1.length-1];
        let elem2=arr2[arr2.length-1];
        if(elem1>elem2){
            arr1.push(nums[i]);
        }else{
            arr2.push(nums[i]);
        }
    }
    return arr1.concat(arr2);
    
};
