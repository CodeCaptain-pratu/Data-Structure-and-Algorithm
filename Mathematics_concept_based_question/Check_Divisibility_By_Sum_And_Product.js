/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let sum = 0;
    let product = 1;
    let num = n ;
    while(num>0){
        let r = num%10;
        sum+=r;
        product*=r;
        num = Math.floor(num/10);
    }
    return (n%(sum+product))===0;
};
