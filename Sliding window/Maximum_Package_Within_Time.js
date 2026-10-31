class Solution {
    maxPackages(arr, totalTime) {
        let currsum = 0;

        let i = 0;

        for (; i < totalTime && i < arr.length; i++) {
            currsum += arr[i];
        }

        let maxi = currsum;

        for (let j = totalTime; j < arr.length; j++) {
            currsum -= arr[j - totalTime];
            currsum += arr[j];

            maxi = Math.max(currsum, maxi);
        }

        return maxi;
    }
}
