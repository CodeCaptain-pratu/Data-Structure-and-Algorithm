/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let num = n;
    let reversenum = 0;
    while(num > 0){
        let r = num % 10;
        reversenum = reversenum * 10 + r;
        num = Math.floor(num/10);
    }
    return Math.abs(n - reversenum);
};
