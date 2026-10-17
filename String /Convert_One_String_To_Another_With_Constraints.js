class Solution {
    isItPossible(s1, s2) {
        let n = s1.length;

        if (n !== s2.length) return false;

        let i = 0, j = 0;

        while (i < n || j < n) {
            while (i < n && s1[i] === '#') i++;
            while (j < n && s2[j] === '#') j++;

            if (i === n || j === n) {
                return i === n && j === n;
            }

            if (s1[i] !== s2[j]) return false;

            if (s1[i] === 'A' && i < j) return false;
            if (s1[i] === 'B' && i > j) return false;

            i++;
            j++;
        }

        return true;
    }
}
