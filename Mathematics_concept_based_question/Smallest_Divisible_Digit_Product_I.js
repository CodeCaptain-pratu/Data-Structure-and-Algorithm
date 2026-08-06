/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    function findproduct(num){
        let number = num;
        let product=1;
        while(number>0){
            let r = number%10;
            product*=r;
            number=Math.floor(number/10);
        }
        return product;
    }
    while(true){
        let product=findproduct(n);
        if(product%t===0){
            break;
        }
        n++;
    }
    return n;
};


/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    while(true){
        let product = 1;
        let number = n;
        while(number>0){
            product *=number%10;
            number=Math.floor(number/10);
        }
        if(product%t===0){
            return n;
        }
        n++;
    }
};
