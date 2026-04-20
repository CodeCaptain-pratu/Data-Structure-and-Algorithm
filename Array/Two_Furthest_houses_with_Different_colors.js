/**
 * @param {number[]} colors
 * @return {number}
 */

//Approach 1 : Brute force 
var maxDistance = function(colors) {
    let maxdist = -Infinity;
    let n=colors.length;
    for(let i=0;i<n;i++){
        for(let j=i;j<n;j++){
            if(colors[i]!==colors[j]){
                maxdist = Math.max(maxdist,
                        Math.abs(j-i));
            }
        }
    }
    return maxdist;
};
/Approach 2 : Brute force with early return 
/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    let maxdist = -Infinity;
    let n=colors.length;
    for(let i=0;i<n;i++){
        for(let j=n-1;j>i;j--){
            if(colors[i]!==colors[j]){
                maxdist = Math.max(maxdist,
                        Math.abs(j-i));
            }
        }
    }
    return maxdist;
};

//Approach 3 : Two pointers with two pass 
/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    let n = colors.length;
    let maxdist = -Infinity;
    let i=0;
    while(colors[i]===colors[n-1]){
        i++;
    }
    maxdist = Math.max(maxdist, Math.abs((n-1)-i));
    i=n-1;
    while(colors[0]===colors[i]){
        i--;
    }
    return Math.max(maxdist, i);
};
//Approach 4 : Two pointers with one pass 
/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    let n = colors.length;
    let maxdist = -Infinity;
    for(let i=0;i<n;i++){
        if(colors[i]!==colors[0]){
            maxdist = Math.max(maxdist, i);
        }
        if(colors[i]!==colors[n-1]){
            maxdist = Math.max(maxdist,
                               Math.abs((n-1)-i));
        }
    }
    return maxdist;
};
