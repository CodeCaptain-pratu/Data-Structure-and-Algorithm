/* Structure of a Tree Node
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    toSumTree(root) {
        // code here
        function sum(node){
            if(!node){
                return 0;
            }
            let leftsum = sum(node.left);
            let rightsum = sum(node.right);
            let oldvalue = node.data;
            node.data=leftsum+rightsum;
            return oldvalue+leftsum+rightsum;
            
        }
        sum(root);
    }
}
