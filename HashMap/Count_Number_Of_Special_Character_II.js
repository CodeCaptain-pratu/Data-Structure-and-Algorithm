/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let lower = new Map();
    let upper = new Map();
    for(let i=0;i<word.length;i++){
        let ch=word[i];
        if(ch>='a' && ch<='z'){
            lower.set(ch,i)
        }else{
            let small = ch.toLowerCase();
            if(!upper.has(small)){
                upper.set(small,i);
            }
        }
    }
    let special=0;
    for(let [key,value] of lower.entries()){
        if(upper.has(key) && value<upper.get(key)){
            special++;
        }
    }
    return special;
};
