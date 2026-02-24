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
 * @return {number}
 */
/* Approach 1 */
var sumRootToLeaf = function(root) {
    let binary=[];
    function solve(result,root){
        if(!root){
            return;
        }
        result= result+root.val;
        if(!root.left && !root.right){
            binary.push(result);
            return;
        }
        solve(result ,root.left);
        solve(result ,root.right);
    }
    solve("",root);
    let sum=0;
    for(let i=0;i<binary.length;i++){
        let num=parseInt(binary[i],2);
        sum+=num;
    }
    return sum;
};
/*Approach 2*/
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
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    function solve(root,prev){
        if(!root){
            return 0;
        }
        prev=2*prev+root.val;
        if(!root.left && !root.right){
            return prev;
        }
        return solve(root.left,prev)+
            solve(root.right,prev);
    }
    return solve(root,0);
};
