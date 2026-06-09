/**
 * @param {number} k
 * @param {number[]} seats
 * @return {boolean}
 */

class Solution {
    canSeatAllPeople(k, seats) {
        // code here
        let n=seats.length;
        for(let i=1;i<n;i++){
            if(seats[i]==1 && seats[i-1]==1){
                return false;
            }
        }
        if(k===0){
            return true;
        }
        for(let i=0;i<n;i++){
            if(seats[i]===0){
                let left = (i===0) || (seats[i-1]===0);
                let right = (i===n-1) || (seats[i+1]===0);
                if(left && right){
                    seats[i]=1;
                    k--;
                    if(k<=0){
                        return true;
                    }
                }
            }
        }
        return k<=0;
    }
}
