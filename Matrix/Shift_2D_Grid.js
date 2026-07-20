/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const total = m * n;
    k %= total;
    
    const res = Array.from({ length: m }, () => new Array(n).fill(0));
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const newIdx = (i * n + j + k) % total;
            const newI = Math.floor(newIdx / n);
            const newJ = newIdx % n;
            res[newI][newJ] = grid[i][j];
        }
    }
    
    return res;
};
