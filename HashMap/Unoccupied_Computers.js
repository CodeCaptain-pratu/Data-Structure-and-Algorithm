class Solution {
    solve(n, s) {
        let seen = new Set();
        let active = new Set();
        let rejected = 0;

        for (let ch of s) {

            // First occurrence = Arrival
            if (!seen.has(ch)) {
                seen.add(ch);

                if (active.size < n) {
                    active.add(ch);
                } else {
                    rejected++;
                }
            }

            // Second occurrence = Departure
            else {
                // फक्त computer मिळालेला customerच
                // computer free करेल
                if (active.has(ch)) {
                    active.delete(ch);
                }
            }
        }

        return rejected;
    }
}
