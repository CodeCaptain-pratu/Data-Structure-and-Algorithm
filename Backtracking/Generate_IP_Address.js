/**
 * @param {string} s
 * @returns {string[]}
 */

class Solution {
    generateIp(s) {
        // code here
        let n = s.length;
        let res = [];

        function isValid(str) {
            if (str.length > 1 && str[0] === '0') return false;
            let num = Number(str);
            return num >= 0 && num <= 255;
        }

        for (let i = 1; i <= 3; i++) {
            for (let j = i + 1; j <= i + 3; j++) {
                for (let k = j + 1; k <= j + 3; k++) {

                    if (k >= n) continue;

                    let A = s.substring(0, i);
                    let B = s.substring(i, j);
                    let C = s.substring(j, k);
                    let D = s.substring(k);

                    if (isValid(A) && isValid(B) && isValid(C) && isValid(D)) {
                        res.push(`${A}.${B}.${C}.${D}`);
                    }
                }
            }
        }

        return res;
    }
}
/**
 * @param {string} s
 * @returns {string[]}
 */

class Solution {
    generateIp(s) {
        // code here
        let res = [];

        function backtrack(start, parts, path) {

            if (parts === 4 && start === s.length) {
                res.push(path.join("."));
                return;
            }

            if (parts === 4 || start === s.length) return;

            for (let len = 1; len <= 3; len++) {

                if (start + len > s.length) break;

                let segment = s.substring(start, start + len);

                if (segment.length > 1 && segment[0] === '0') break;

                if (Number(segment) > 255) break;

                path.push(segment);

                backtrack(start + len, parts + 1, path);

                path.pop();
            }
        }

        backtrack(0, 0, []);

        return res;
    }
}
