/**
 * @param {number[][]} mat
 * @return {number}
 */
/*Approach 1 : Brute force 
As the problem requires that a position in a matrix is 
special if there is no one in same row and column 
1) Traverse the matrix
   - i = 0 to row - 1
   - j = 0 to col - 1
2) If mat[i][j] === 1, then check:
   - Traverse the entire row i
     - If any other 1 found → return false
   - Traverse the entire column j
     - If any other 1 found → return false
   - If no other 1 found in same row and column
     → It is a special position → return true
3) Increment count whenever a special position is found
4) Return count

Time Complexity : O((m*n)*(m+n))
Space Complexity : O(1) */

var numSpecial = function(mat) {
    let special=0;
    let row=mat.length;
    let col=mat[0].length;
    function isSpecial(r,c){
        for(let i=0;i<col;i++){
            if(i===c){
                continue;
            }
            if(mat[r][i]===1){
                return false;
            }
        }
        for(let j=0;j<row;j++){
            if(j===r){
                continue;
            }
            if(mat[j][c]===1){
                return false;
            }
        }
        return true;
    }
    let count =0;
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(mat[i][j]===1){
                if(isSpecial(i,j)){
                    count++;
                }
            }
        }
    }
    return count;
};

/**
 * @param {number[][]} mat
 * @return {number}
 */
/*Approach 2 : Optimized approach 
1) Create two arrays initialized with 0:
   - row[] of size m (number of rows)
   - col[] of size n (number of columns)
2) Traverse the matrix:
   - i = 0 to m - 1
   - j = 0 to n - 1
3) If mat[i][j] === 1
   - Increment row[i]++
   - Increment col[j]++
4) Traverse the matrix again
5) If mat[i][j] === 1 and row[i] === 1 and col[j] === 1
   → Increment count
6) Return count

Time Complexity : O(m*n) 
Space Complexity : O(m+n)*/ 

var numSpecial = function(mat) {
    let m=mat.length;
    let n=mat[0].length;
    let row=new Array(m).fill(0);
    let col=new Array(n).fill(0);
    let count = 0;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(mat[i][j]===1){
                row[i]++;
                col[j]++;
            }
        }
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(mat[i][j]===1){
                if(row[i]===1 && col[j]===1){
                    count++;
                }
            }
        }
    }
    return count;
};
