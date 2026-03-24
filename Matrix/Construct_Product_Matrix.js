/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var constructProductMatrix = function(grid) {
    let prod=1;
    let m=grid.length;
    let n=grid[0].length;
    let suffix=1;
    let mod=12345;
    let result=Array.from({length:m},()=>[]);
    for(let i=m-1;i>=0;i--){
        for(let j=n-1;j>=0;j--){
            result[i][j]=suffix;
            suffix=(suffix*grid[i][j])%mod;
        }
    }
    let prefix=1;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            result[i][j]=(prefix*result[i][j])%mod;
            prefix=(prefix*grid[i][j])%mod;
        }
    } 
    return result;
};
