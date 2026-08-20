/* Structure of Binary Tree Node
class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}*/

/**
 * @param {Node} root
 * @returns {number}
 */

class Solution {
    maxDiff(root) {
        // code here
        let ans=-Infinity;
        function dfs(node){
            if(!node){
                return Infinity;
            }
            let leftMini = dfs(node.left);
            let rightMini = dfs(node.right);
            if(node.left){
                ans = Math.max(ans,node.data-leftMini);
            }
            if(node.right){
                ans = Math.max(ans,node.data-rightMini);
            }
            return Math.min(node.data,leftMini,rightMini);
        }
        dfs(root);
        return ans;
    }
}
