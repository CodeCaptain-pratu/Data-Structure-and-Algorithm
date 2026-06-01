class Solution {
    findMaxProduct(arr) {
        //code here
        let n = arr.length;
        let mod=1000000007n;
        if(n===1){
            let ans = BigInt(arr[0]);
            ans%=mod;
            return Number(ans);
        }
        let product = 1n;
        let zero=0;
        let neg=0;
        let maxneg=-Infinity;
        for(let num of arr){
            if(num===0){
                zero++;
            }else{
                product*=BigInt(num);
                if(num<0){
                    neg++;
                    maxneg=Math.max(maxneg,num); 
                }
            }
        }
        if(zero===n){
            return 0;
        }
        if(neg===1 && neg+zero===n){
            return 0;
        }
        if(neg%2!==0){
            product/=BigInt(maxneg);
        }
        product%=mod;
        if(product<0n){
            product+=mod;
        }
        return Number(product);
    }
};
