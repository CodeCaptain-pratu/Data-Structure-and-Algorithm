/**
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var findKthSmallest = function(coins, k) {
    let amount = 1;
    let count = 0;
    while(count<k){
        for(let coin of coins){
            if(amount%coin===0){
                count++;
                break;
            }
        }
        amount++;
    }
    return amount-1;
};
