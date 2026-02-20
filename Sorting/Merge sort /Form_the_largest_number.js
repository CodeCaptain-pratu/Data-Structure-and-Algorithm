/**
 * @param {number[]} arr
 * @returns {String}
 */
/* Approach 1 : Brute force */
class Solution {
    findLargest(arr) {
        // code here
        let result="0";
        function permute(nums,l){
            if(l===nums.length){
                let num=nums.join("");
                if(num>result){
                    result=num;
                }
                return ;
            }
            for(let i=1;i<nums.length;i++){
                [nums[l],nums[i]]=[nums[i],nums[l]];
                permute(nums,l+1);
                [nums[l],nums[i]]=[nums[i],nums[l]];
            }
        }
        permute(arr,0);
        return result;
    }
}

/**
 * @param {number[]} arr
 * @returns {String}
 */
/* Approach 2 : */
class Solution {
    findLargest(arr) {
        // code here
        let nums=arr.map(String);
        nums.sort((a,b)=>(b+a).localeCompare(a+b));
        if(nums[0]==="0"){
            return "0";
        }
        return nums.join("");
    }
}
