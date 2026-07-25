/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let arr=n.toString().split("").map(Number);
    let maxi = -Infinity;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            maxi = Math.max(maxi,arr[i]*arr[j]);
        }
    }
    return maxi;
};

/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let large = -1;
    let secondlarge = -1;
    while(n>0){
        let digit = n%10;
        if(digit>=large){
            secondlarge = large;
            large = digit;
        }else if(digit>secondlarge){
            secondlarge = digit;
        }
        n = Math.floor(n/10);
    }
    return large*secondlarge;
};
