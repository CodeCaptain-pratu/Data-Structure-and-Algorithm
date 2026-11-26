/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    let stones = 10;
    let aliceturn = true;
    while(n>=stones){
        n = n - stones;
        stones--;
        aliceturn = !aliceturn;
    }
    return !aliceturn;
};
