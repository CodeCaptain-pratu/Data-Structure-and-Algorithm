/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {

    const freq = new Array(26).fill(0);

    for (const ch of s)
        freq[ch.charCodeAt(0) - 97]++;

    let left = "";
    let middle = "";

    for (let i = 0; i < 26; i++) {

        left += String.fromCharCode(97 + i).repeat(Math.floor(freq[i] / 2));

        if (freq[i] % 2)
            middle = String.fromCharCode(97 + i);
    }

    const right = left.split("").reverse().join("");

    return left + middle + right;
};
