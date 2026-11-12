/* Structure of a Binary Search Tree node
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @param {number} k
 * @return {number}
 */

class Solution {
    minDiff(root, k) {
        // code here
        let diff = Infinity;
        let node=root;
        while(node){
            if(node.data===k){
                return 0;
            }else if(k>node.data){
                diff=Math.min(diff,
                Math.abs(k-node.data));
                node=node.right;
            }else{
                diff=Math.min(diff,
                Math.abs(k-node.data));
                node=node.left;
            }
        }
        return diff;
    }
}
