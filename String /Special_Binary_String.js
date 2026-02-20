/**
 * @param {string} s
 * @return {string}
 */
var makeLargestSpecial = function(s) {
    let specials=[];
    let start=0;
    let sum=0;
    for(let i=0;i<s.length;i++){
        sum+=(s[i]==="1")?+1:-1;
        if(sum===0){
            let inner=s.substring(start+1,i);
            specials.push(
                "1"+makeLargestSpecial(inner)+"0"
            );
            start=i+1;
        }
    }
    specials.sort((a,b)=>b.localeCompare(a));
    return specials.join("")
};
