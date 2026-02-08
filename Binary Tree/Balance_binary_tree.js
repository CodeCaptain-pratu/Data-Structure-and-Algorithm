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
 * @return {boolean}
 */

/*Approach : Recursion 
1) Use recursion to compute the height of the left
   and right subtree 
2) If root is null then the tree is balanced and return true
3) If the absolute difference between left subtree and 
   right subtree is greater than 1 then return false 
4) Recusively check if the and right subtree are balanced or
   not 

Time complexity  : O(n^2)
Space complexity : O(h) (where h is height of the tree)*/


var isBalanced = function(root) {
    function height(root){
        if(!root){
            return 0;
        }
        let lefth=height(root.left);
        let righth=height(root.right);
        return Math.max(lefth,righth)+1;
    }
    if(!root){
        return true;
    }
    let lefth=height(root.left);
    let righth=height(root.right);
    if((Math.abs(lefth-righth))>1){
        return false;
    }
    return isBalanced(root.left) && isBalanced(root.right);
};
