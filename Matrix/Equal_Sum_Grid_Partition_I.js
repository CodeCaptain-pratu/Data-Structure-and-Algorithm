/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function(grid) {
    let m=grid.length;
    let n=grid[0].length;
    let total=0;
    let row=new Array(m).fill(0);
    let col=new Array(n).fill(0);
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            total+=grid[i][j];
            row[i]+=grid[i][j];
            col[j]+=grid[i][j];
        }
    }
    if(total%2!==0){
        return false;
    }
    let upper=0;
    for(let i=0;i<=m-2;i++){
        upper+=row[i];
        if(upper===total-upper){
            return true;
        }
    }
    let left=0;
    for(let j=0;j<=n-2;j++){
        left+=col[j];
        if(left===total-left){
            return true;
        }
    }
    return false;
};
