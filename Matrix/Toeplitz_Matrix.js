/**
 * @param {number[][]} mat
 * @return {boolean}
 */
class Solution {
    searchMatrix(mat) {
        // code here
        let row=mat.length;
        let col=mat[0].length;
        for(let i=1;i<row;i++){
            for(let j=1;j<col;j++){
                if(mat[i-1][j-1]!==mat[i][j]){
                    return false;
                }
            }
        }
        return true;
    }
}
