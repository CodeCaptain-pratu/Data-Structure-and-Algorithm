/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    let sum=0;
    let n=nums.length;
    for(let i=0;i<n;i++){
        let st=new Set();
        for(let j=i;j<n;j++){
            st.add(nums[j]);
            let elements=st.size;
            sum+=elements*elements;
        }
    }
    return sum;
};
