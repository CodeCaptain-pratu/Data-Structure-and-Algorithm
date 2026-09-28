/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depth = 0;
    let maxdepth = 0;
    for(let ch of s){
        if(ch==="("){
            depth++;
        }else if(ch===")"){
            depth--;
        }
        maxdepth=Math.max(depth,maxdepth);
    }
    return maxdepth;
};
