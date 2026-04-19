/**
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
class Solution {
    isPower(x, y) {
        // code here
       if(x === 1){
           return y === 1;
       }
       if(y === 1){
           return true;
       }
       if(y === 0){
           return false;
       }
       while(y%x === 0){
           y = y/x;
       }
       return y===1;
    }
}
