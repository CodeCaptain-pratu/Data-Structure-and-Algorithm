class Solution {
    balancePan(a, b) {
        while (b > 0) {
            let r = b % a;

            if (r === 0) {
                b = Math.floor(b / a);
            } else if (r === 1) {
                b = Math.floor((b - 1) / a);
            } else if (r === a - 1) {
                b = Math.floor((b + 1) / a);
            } else {
                return false;
            }
        }

        return true;
    }
}
