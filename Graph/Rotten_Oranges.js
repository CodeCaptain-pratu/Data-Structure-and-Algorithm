class Solution {
    orangesRot(mat) {
        let m = mat.length;
        let n = mat[0].length;

        let queue = [];
        let fresh = 0;

        // Initial scan
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (mat[i][j] === 2) {
                    queue.push({ r: i, c: j, t: 0 });
                } else if (mat[i][j] === 1) {
                    fresh++;
                }
            }
        }

        let mt = 0;
        let del = [[-1, 0], [0, 1], [1, 0], [0, -1]];

        // BFS
        while (queue.length > 0) {
            let s = queue.shift();

            mt = Math.max(mt, s.t);

            for (let i = 0; i < 4; i++) {
                let nr = s.r + del[i][0];
                let nc = s.c + del[i][1];

                if (
                    nr >= 0 && nr < m &&
                    nc >= 0 && nc < n &&
                    mat[nr][nc] === 1
                ) {
                    queue.push({ r: nr, c: nc, t: s.t + 1 });
                    mat[nr][nc] = 2;
                    fresh--;
                }
            }
        }

        return fresh !== 0 ? -1 : mt;
    }
}
