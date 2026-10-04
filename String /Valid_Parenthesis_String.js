/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let bmin=0;
    let bmax=0;
    for(let ch of s){
        if(ch==="("){
            bmin++;
            bmax++;
        }else if(ch===")"){
            bmin--;
            bmax--;
        }else{
            bmin--;
            bmax++;
        }
        if(bmax<0){
            return false;
        }
        bmin=Math.max(0,bmin);
    }
    return bmin===0;
};
