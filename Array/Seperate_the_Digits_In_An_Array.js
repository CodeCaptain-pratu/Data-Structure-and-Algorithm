/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let result = [];
    for(let num of nums){
        let temp=num.toString().split("");
        for(let val of temp){
            result.push(Number(val));
        }
    }
    return result;
};
