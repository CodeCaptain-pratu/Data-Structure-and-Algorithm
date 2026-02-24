/**
 * @param {number[]} a1
 * @param {number[]} a2
 * @returns {number}
 */
/*Approach: Brute force*/
class Solution {
    equalSumSpan(a1, a2) {
        // code here
        let maxSpan=0;
        for(let i=0;i<a1.length;i++){
            let sum1=0, sum2=0;
            for(let j=i;j<a1.length;j++){
                sum1+=a1[j];
                sum2+=a2[j];
                if(sum1===sum2){
                    maxSpan=Math.max(maxSpan,j-i+1);
                }
            }
        }
        return maxSpan;
    }
}
/*Approach : Hashmap*/
/**
 * @param {number[]} a1
 * @param {number[]} a2
 * @returns {number}
 */
class Solution {
    equalSumSpan(a1, a2) {
        // code here
        let mp=new Map();
        let prefix=0;
        mp.set(0,-1);
        let maxspan=0;
        for(let i=0;i<a1.length;i++){
            prefix+=a1[i]-a2[i];
            if(mp.has(prefix)){
                let span=i-mp.get(prefix);
                maxspan=Math.max(span,maxspan);
            }else{
                mp.set(prefix,i);
            }
        }
        return maxspan;
    }
}
