/**
 * @param {number[][]} mat
 * @returns {number}
 */

class Solution {
    findPerimeter(mat) {
        // your code here
        let m=mat.length;
        let n=mat[0].length;
        let dr=[-1,1,0,0];
        let dc=[0,0,-1,1];
        let perimeter=0;
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                if(mat[i][j]===1){
                    perimeter+=4;
                    for(let k=0;k<4;k++){
                        let x=i+dr[k];
                        let y=j+dc[k];
                        if(x>=0 && x<m &&
                        y>=0 && y<n &&
                        mat[x][y]===1){
                            perimeter--;
                        }
                    }
                }
            }
        }
        return perimeter;
    }
}
