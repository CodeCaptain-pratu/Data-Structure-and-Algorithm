/**
 * @param {number} n
 * @return {string}
 */

class Solution {
    nthCharacter(n) {
        // code here
        let digit = 1;
        while((Math.pow(10,digit)-
        Math.pow(10,digit-1))*digit<n){
            n-=(Math.pow(10,digit)-Math.pow(10,digit-1))*digit;
            digit++;
        }
        let num = Math.floor((n-1)/digit);
        let pos = n - (num*digit);
        let res = Math.pow(10,digit-1)+num;
        return res.toString()[pos-1];
    }
}
