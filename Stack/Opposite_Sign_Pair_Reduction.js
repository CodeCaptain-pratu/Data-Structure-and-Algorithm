/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    reducePairs(arr) {
        // code here
        let st = [];

        for (let ele of arr) {
            while (
                st.length > 0 &&
                st[st.length - 1] * ele < 0   // opposite signs
            ) {
                let top = st[st.length - 1];

                if (Math.abs(top) > Math.abs(ele)) {
                    // top survives
                    ele = top;
                    st.pop();
                } else if (Math.abs(top) < Math.abs(ele)) {
                    // current survives
                    st.pop();
                } else {
                    // both destroyed
                    st.pop();
                    ele = 0;
                    break;
                }
            }

            if (ele !== 0) {
                st.push(ele);
            }
        }

        return st;
    }
};
