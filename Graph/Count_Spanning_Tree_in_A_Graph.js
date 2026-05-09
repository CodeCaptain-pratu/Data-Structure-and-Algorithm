/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
//Approach 1 
class Solution {
    determinant(minor){
        let n = minor.length;
        if(n===1){
            return minor[0][0];
        }
        if(n===2){
            return minor[0][0]*minor[1][1]-
            minor[0][1]*minor[1][0];
        }
        let det = 0;
        for(let col=0; col<n; col++){
            let sub=[];
            for(let i=1;i<n;i++){
                let row=[];
                for(let j=0;j<n;j++){
                    if(j!==col){
                        row.push(minor[i][j]);
                    }
                }
                sub.push(row);
            }
            det+=((col%2===0 ? 1 :-1)
            *minor[0][col]*this.determinant(sub));
        }
        return det;
    }
    countSpanTree(n, edges) {
        // code here
        let lap = Array.from({length:n},()=>
        Array(n).fill(0));
        for(let [u,v] of edges){
            lap[u][u]++;
            lap[v][v]++;
            
            lap[u][v]--;
            lap[v][u]--;
        }
        let minor=[];
        for(let i=0;i<n-1;i++){
            let row = [];
            for(let j=0;j<n-1;j++){
                row.push(lap[i][j]);
            }
            minor.push(row);
        }
        return this.determinant(minor);
    }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
//Approach 2 - 
class Solution {

    determinant(mat) {

        let n = mat.length;

        // copy matrix
        mat = mat.map(row => [...row]);

        let det = 1;

        for (let i = 0; i < n; i++) {

            // Find pivot row
            let pivot = i;

            while (pivot < n && mat[pivot][i] === 0) {
                pivot++;
            }

            // determinant = 0
            if (pivot === n) {
                return 0;
            }

            // Swap rows if needed
            if (pivot !== i) {

                [mat[i], mat[pivot]] =
                [mat[pivot], mat[i]];

                det *= -1;
            }

            let pivotValue = mat[i][i];

            det *= pivotValue;

            // Make below elements zero
            for (let j = i + 1; j < n; j++) {

                let factor = mat[j][i] / pivotValue;

                for (let k = i; k < n; k++) {

                    mat[j][k] -= factor * mat[i][k];
                }
            }
        }

        return Math.round(det);
    }

    countSpanTree(n, edges) {

        // Step 1: Build Laplacian Matrix
        let lap = Array.from(
            { length: n },
            () => Array(n).fill(0)
        );

        for (let [u, v] of edges) {

            lap[u][u]++;
            lap[v][v]++;

            lap[u][v]--;
            lap[v][u]--;
        }

        // Step 2: Create Minor Matrix
        // remove last row and column

        let minor = [];

        for (let i = 0; i < n - 1; i++) {

            let row = [];

            for (let j = 0; j < n - 1; j++) {
                row.push(lap[i][j]);
            }

            minor.push(row);
        }

        // Step 3: Determinant
        return this.determinant(minor);
    }
}
