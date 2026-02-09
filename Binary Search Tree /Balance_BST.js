/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

/*
Approach: 

1) Inorder traversal of a BST gives values in sorted order
(The BST itself is not “sorted,” but its inorder traversal is.)

2) Create an array to store the node values.

3) Perform an inorder traversal and push all node values into
  the array (this produces a sorted list).

4) Build a Balanced BST from the sorted array:

Pick the middle element as the root

Recursively build the left subtree from the left half

Recursively build the right subtree from the right half

Continue while left ≤ right

Time Complexity : O(n)+O(n) = O(2n) = O(n)
Space complexity: O(n+h)
*/

var balanceBST = function(root) {
    function inorder(node, arr){
        if(!node){
            return;
        }
        inorder(node.left,arr);
        arr.push(node.val);
        inorder(node.right,arr);
    }
    function solve(l,r,arr){
        if(l>r){
            return null;
        }
        let mid=Math.floor((l+r)/2);
        let root = new TreeNode(arr[mid]);
        root.left=solve(l,mid-1,arr);
        root.right=solve(mid+1,r,arr);
        return root;
    }
    let arr=[];
    inorder(root,arr);
    return solve(0,arr.length-1,arr);
};
