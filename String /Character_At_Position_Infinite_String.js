
class Solution {
    posInfinite(s, pos) {
        let len = s.length;
        let i = 1;

        // Find the length of the required expanded string
        while (len < pos) {
            len = 2 * len + i;
            i++;
        }

        // Traverse backwards to find the character
        while (i > 1) {
            i--;

            let pl = Math.floor((len - i) / 2);

            if (pos <= pl) {
                // Character lies in the left part
            }
            else if (pos <= pl + i) {
                return '$';
            }
            else {
                let r = pos - (pl + i);
                pos = pl - r + 1;
            }

            len = pl;
        }

        return s[pos - 1];
    }
}
