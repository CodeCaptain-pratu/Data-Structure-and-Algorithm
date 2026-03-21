/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
var reverseSubmatrix = function(grid, x, y, k) {
    let startRow=x;
    let endRow=x+k-1;
    while(startRow<endRow){
        for(let col=y;col<y+k;col++){
            let temp=grid[startRow][col];
            grid[startRow][col]=grid[endRow][col];
            grid[endRow][col]=temp;
        }
        startRow++;
        endRow--;
    }
    return grid;
};
