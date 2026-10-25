class Solution {
    beautySum(s) {
        let n = s.length;
        let ans = 0;

        for (let i = 0; i < n; i++) {
            let freq = new Array(26).fill(0);

            for (let j = i; j < n; j++) {
                freq[s.charCodeAt(j) - 'a'.charCodeAt(0)]++;

                let maxFreq = 0;
                let minFreq = Infinity;

                for (let f of freq) {
                    if (f > 0) {
                        maxFreq = Math.max(maxFreq, f);
                        minFreq = Math.min(minFreq, f);
                    }
                }

                ans += maxFreq - minFreq;
            }
        }

        return ans;
    }
}
