/**
 * @param {number[]} arr
 * @return {number[]}
 */
/*Approach: Brute force */
var sortByBits = function(arr) {
    function countSetBits(num){
        let count=0;
        let original=num;
        while(num>0){
            let bit=num%2;
            if(bit===1){
                count++;
            }
            num=Math.floor(num/2);
        }
        return [original,count];
    }
    let result=[]
    for(let num of arr){
        let ans=countSetBits(num);
        result.push(ans);
    }
    result.sort((a,b)=>{
        if(a[1]===b[1]){
            return a[0]-b[0];
        }
        return a[1]-b[1];
    });
    let sortedBits=[]
    for(let [num,count] of result){
        sortedBits.push(num);
    }
    return sortedBits;
};
/*Approach 2: Optimized */
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    function countSetBits(num){
        let count=0;
        while(num){
            count+=num&1;
            num=num>>1;
        }
        return count;
    }
    arr.sort((a,b)=>{
        let count_a=countSetBits(a);
        let count_b=countSetBits(b);
        if(count_a===count_b){
            return a-b;
        }
        return count_a-count_b;
    })
    return arr;
};
