/*
Definition for Node
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}
*/
class Solution {
    isSubTree(root1, root2) {
        // code here
        function isSame(a,b){
            if(!a && !b){
                return true;
            }
            if(!a || !b){
                return false;
            }
            if(a.data!==b.data){
                return false;
            }
            return isSame(a.left, b.left) && isSame(a.right,
            b.right);
        }
        function solve(node){
            if(!node){
                return false;
            }
            if(isSame(node,root2)){
                return true;
            }
            return solve(node.left) || solve(node.right);
        }
        return solve(root1);
    }
}
/*
Definition for Node
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}
*/
class Solution {
    isSubTree(root1, root2) {
        // code here
        function serialize(node){
            if(!node){
                return "N,";
            }
            return node.data+serialize(node.left)+
            serialize(node.right);
        }
        let tree1 = serialize(root1);
        let tree2 = serialize(root2);
        return tree1.includes(tree2);
    }
}
