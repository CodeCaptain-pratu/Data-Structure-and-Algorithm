/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
/*Approach 1: */
class Solution {
    findUnion(a, b) {
        // code here
        let st=new Set();
        for(let num of a){
            st.add(num);
        }
        for(let num of b){
            st.add(num);
        }
        let result=[...st];
        return result;
    }
}

/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */

/*Approach 2*/
class Solution {
    findUnion(a, b) {
        // code here
        return [...new Set([...a,...b])];
    }
}
