/**
 * @param {string} n
 * @return {number}
 */
/*Approach 1 */
var minPartitions = function(n) {
    let arr = n.split("");
    let count = 0;
    while(true){
        let changed = false;
        for(let i=0;i<arr.length;i++){
            if(arr[i]!=="0"){
             arr[i]=String(Number(arr[i])-1);
             changed=true;
            }
        }
        if(!changed){
            break;
        }
        count++;
    }
    return count;
};

/**
 * @param {string} n
 * @return {number}
 */
/*Approach 2 */
var minPartitions = function(n) {
    return Math.max(...n.split("").map(Number));
};
