/**
 * @param {string[][]} mat
 * @param {string} word
 * @returns {boolean}
 */

/*
### Approach (Backtracking

1) Traverse the board and find cells matching the first character of the word.

2) From that cell, explore in 4 directions (up, down, left, right) for the next character.

3) Mark the current cell as visited (e.g., "$") to avoid revisiting in the same path.

4) If all characters of the word are matched, return true.

5) If a path fails, backtrack by restoring the cell’s original value.

Time complexity  : O(row*col*4*L) (L : length of the word)  
Space complexity :  O(L) 

*/
class Solution {
    constructor(){
        this.d=[[0,1],[0,-1],[1,0],[-1,0]];
        this.row=0;
        this.col=0;
    }
    findWord(i,j,idx,mat,word){
        if(idx===word.length){
            return true;
        }
        if(i<0 || j<0 || i>=this.row || j>=this.col ||
        mat[i][j]!==word[idx] || mat[i][j]==="$"){
            return false;
        }
        let temp=mat[i][j];
        mat[i][j]="$";
        for(let [dx,dy] of this.d){
            let nx=dx+i;
            let ny=dy+j;
            if(this.findWord(nx,ny,idx+1,mat,word)){
                return true;
            }
        }
        mat[i][j]=temp;
        return false;
    }
    isWordExist(mat, word) {
        // code here
        this.row=mat.length;
        this.col=mat[0].length;
        for(let i=0;i<this.row;i++){
            for(let j=0;j<this.col;j++){
                if(mat[i][j]===word[0] &&
                this.findWord(i,j,0,mat,word)){
                    return true;
                }
            }
        }
        return false;
    }
}
