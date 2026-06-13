/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function (words, weights) {
    let res = "";
    let word = words.join(",") + ",";
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
        if (word.charCodeAt(i) - 97 >= 0) {
            sum += weights[word.charCodeAt(i) - 97]
        }
        else {
            let mod = sum % 26;
            res += String.fromCharCode(26 - mod + 96)
            sum = 0;
        }
    }
    return res;

};
