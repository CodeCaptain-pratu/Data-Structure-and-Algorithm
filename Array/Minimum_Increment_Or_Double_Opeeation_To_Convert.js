class Solution {
    countMinOperations(arr) {
        let ans = 0;

        while (true) {

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 1) {
                    arr[i]--;
                    ans++;
                }
            }

            let allzero = true;

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== 0) {
                    allzero = false;
                    break;
                }
            }

            if (allzero) break;

            for (let i = 0; i < arr.length; i++) {
                arr[i] = Math.floor(arr[i] / 2);
            }

            ans++;
        }

        return ans;
    }
}
