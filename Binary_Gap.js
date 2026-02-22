/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
     let result = "";
     while(n>0){
         result+=n%2;
         n=Math.floor(n/2);
     }
    let prev=-1, curr=-1;
    let dist=0;
    for(let i=0;i<result.length;i++){
        if(result[i]==="1"){
            prev=curr;
            curr=i;
        }
        if(prev!==-1){
         dist=Math.max(dist,curr-prev);
        }
    }
    return dist;
};
