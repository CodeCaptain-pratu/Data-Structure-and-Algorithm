/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    let mp = new Map();
    for(let [row,seat] of reservedSeats){
        if(!mp.has(row)){
            mp.set(row,new Set());
        }
        mp.get(row).add(seat);
    }
    let result=(n-mp.size)*2;
    for(let [row,bookseat] of mp){
        let isAvailable = (seat)=>{
            return !bookseat.has(seat);
        }
        let groupA=isAvailable(2)&&isAvailable(3)&&isAvailable(4)&&isAvailable(5);
        let groupB=isAvailable(4)&&isAvailable(5)&&isAvailable(6)&&isAvailable(7);
        let groupC=isAvailable(6)&&isAvailable(7)&&isAvailable(8)&&isAvailable(9);
        if(groupA && groupC){
            result+=2;
        }else if(groupA || groupB || groupC){
            result+=1;
        }
    }
    return result;
};
