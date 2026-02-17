/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    function countSetBits(num){
        let count=0;
        while(num>0){
            count+=(num&1);
            num=num>>1;
        }
        return count;
    }
    let result=[];
    for(let h=0;h<=11;h++){
        for(let m=0;m<=59;m++){
            if(countSetBits(h)+countSetBits(m)===turnedOn){
                let hour=h.toString();
                let minute=(m<10?"0":"")+m.toString();
                result.push(hour+":"+minute);
            }
        }
    }
    return result;
};
