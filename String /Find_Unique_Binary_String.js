/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let st=new Set();
    for(let num of nums){
        st.add(parseInt(num,2));
    }
    let result="";
    let n=nums.length;
    for(let i=0;i<=65536;i++){
        if(!st.has(i)){
            result=i.toString(2).padStart(16,'0');
            break;
        }
    }
    return result.slice(16-n);
};
/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let st=new Set();
    for(let num of nums){
        st.add(parseInt(num,2));
    }
    let result="";
    let n=nums.length;
    for(let i=0;i<=n;i++){
        if(!st.has(i)){
            result=i.toString(2).padStart(16,'0');
            break;
        }
    }
    return result.slice(16-n);
};
/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let n=nums.length;
    let result = "";
    for(let i=0;i<n;i++){
        let ch=nums[i][i];
        result+= (ch==="0")?"1":"0";
    }
    return result;
};
