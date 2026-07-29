class Solution {
    minSubsets(arr) {
        let vec = [];

        arr.sort((a, b) => a - b);

        let last = arr[0];
        let v = [arr[0]];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] === last + 1) {
                v.push(arr[i]);
            } else {
                vec.push([...v]); // current subset store करा
                v = [arr[i]];
            }
            last = arr[i];
        }

        vec.push(v);

        return vec.length;
    }
}
