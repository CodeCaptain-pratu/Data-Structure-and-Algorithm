/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function(m, n) {
    let grid = Array.from({length:m},() => 
        Array(n).fill("#"));
    grid[0][0]=".";
    let r=0, c=0;
    while(r<m-1 || c<n-1){
        if(r<m-1 && (c===n-1 || 
            Math.abs((r+1)*(n-1)-c*(m-1))<=
            Math.abs((r)*(n-1)-(c+1)*(m-1)))){
            r++;
        }else{
            c++;
        }
        grid[r][c]=".";
    }
    return grid.map(row=>row.join(''));
};
