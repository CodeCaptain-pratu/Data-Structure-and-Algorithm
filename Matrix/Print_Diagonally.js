/**
 * @param {number} n
 * @param {number[][]} mat
 * @returns {number[]}
 */
//Approach 1 :
class Solution {
    diagView(mat) {
        //  code here
        let n=mat.length;
        let result=[];
        for(let d=0;d<2*n-1;d++){
            for(let i=0;i<n;i++){
                let j=d-i;
                if(j>=0 && j<n){
                    result.push(mat[i][j])
                }
            }
        }
        return result;
    }
}

/**
 * @param {number} n
 * @param {number[][]} mat
 * @returns {number[]}
 */
//Approach 2 :
class Solution {
    diagView(mat) {
        //  code here
        let n=mat.length;
        let last=n-1;
        let result=[];
        for(let d=0;d<2*n-1;d++){
            let start=Math.max(0,d-last);
            let end=Math.min(last,d);
            for(let i=start;i<=end;i++){
                let j=d-i;
                result.push(mat[i][j]);
            }
        }
        return result;
    }
}
