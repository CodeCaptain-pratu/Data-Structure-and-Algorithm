/*
class Node
{
    constructor(x){
        this.key=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {Node} root
 * @return {number}
 */
class Solution {
    maxPathSum(root) {
        // code here
        let ans = -Infinity;
        let leafnode = 0;
        function dfs(node){
            if(node===null){
                return -Infinity;
            }
            if(node.left===null && node.right===null){
                leafnode++;
                return node.key;
            }
            let leftsum = dfs(node.left);
            let rightsum = dfs(node.right);
            if(node.left!==null && node.right!==null){
                ans = Math.max(ans, node.key+leftsum+
                rightsum);
            }
            return node.key+Math.max(leftsum,rightsum);
        }
        dfs(root);
        return leafnode<2?-1:ans;
    }
}
