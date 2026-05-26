/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let upper = new Set();
    let lower = new Set();
    for(let ch of word){
        if(ch>="a" && ch<="z"){
            lower.add(ch);
        }else{
            upper.add(ch.toLowerCase());
        }
    }
    let special= 0;
    for(let ch of lower){
        if(upper.has(ch)){
            special++;
        }
    }
    return special;
};

/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let upper = new Array(26).fill(0);
    let lower = new Array(26).fill(0);
    for(let ch of word){
        if(ch>="a" && ch<="z"){
            lower[ch.charCodeAt(0)-'a'.charCodeAt(0)]++;
        }
        else{
            upper[ch.charCodeAt(0)-'A'.charCodeAt(0)]++;
        }
    }
    let special = 0;
    for(let i=0;i<26;i++){
        if(lower[i]>=1 && upper[i]>=1){
            special++;
        }
    }
    return special;
};
