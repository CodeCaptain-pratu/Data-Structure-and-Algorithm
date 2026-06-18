function findCoverage(mat) {
    let n = mat.length;
    let m = mat[0].length;

    let total = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {

            // फक्त 0 cell साठी
            if (mat[i][j] === 0) {

                // LEFT
                for (let col = j - 1; col >= 0; col--) {
                    if (mat[i][col] === 1) {
                        total++;
                        break;
                    }
                }

                // RIGHT
                for (let col = j + 1; col < m; col++) {
                    if (mat[i][col] === 1) {
                        total++;
                        break;
                    }
                }

                // UP
                for (let row = i - 1; row >= 0; row--) {
                    if (mat[row][j] === 1) {
                        total++;
                        break;
                    }
                }

                // DOWN
                for (let row = i + 1; row < n; row++) {
                    if (mat[row][j] === 1) {
                        total++;
                        break;
                    }
                }
            }
        }
    }

    return total;
}
