/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
//Approach 1: Brute force 
//var closestTarget = function(words, target, startIndex) {
    let n=words.length;
    let found=false;
    for(let i=0;i<n;i++){
        if(words[i]===target){
            found=true;
        }
    }
    if(!found){
        return -1;
    }
    let i=startIndex;
    let steps=0;
    let mindist=Infinity;
    while(words[i]!==target){
        steps++;
        i=(i+1)%n;
    }
    mindist=Math.min(mindist,steps);
    i=startIndex;
    steps=0;
    while(words[i]!==target){
        steps++;
        i=((i-1)+n)%n;
    }
    mindist=Math.min(mindist,steps);
    return mindist;
};

//Approach 2 : Optimize Approach 
/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function(words, target, startIndex) {
    let n=words.length;
    let mindist=Infinity;
    for(let i=0;i<n;i++){
        if(words[i]===target){
            let straight_dist=Math.abs(i-startIndex);
            let circular_dist= n - straight_dist;
            mindist=Math.min(mindist, straight_dist,
                        circular_dist);
        }
    }
    return mindist===Infinity?-1:mindist;
};
