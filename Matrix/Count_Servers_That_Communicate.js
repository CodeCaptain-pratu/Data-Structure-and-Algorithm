/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    let m=grid.length;//row length
    let n=grid[0].length;//col length
    let indexRowCount=Array(m).fill(0);
    let indexColCount=Array(n).fill(0);
    //presprocessing - in which row how many servers are there and in which col how many servers are there 
    for(let row=0;row<m;row++){
        for(let col=0;col<n;col++){
            if(grid[row][col]===1){//found a server at grid[row][col]
                indexRowCount[row]++;
                indexColCount[col]++;
            }
        }
    }
    let result=0;
    //again iterate
    for(let row=0;row<m;row++){
        for(let col=0;col<n;col++){
            //if server found check in preprocessing row and col if the index value is >1 increase the result 
            if(grid[row][col]===1 && (indexRowCount[row]>1 || indexColCount[col]>1)){
                result++;
            }
        }
    }
    return result;
};
