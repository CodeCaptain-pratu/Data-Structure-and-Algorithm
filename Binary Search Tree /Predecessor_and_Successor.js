/**
 * @param {Node} root
 * @param {number} key
 * @returns {number[]}
 */

/*
class Node {
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
}
*/
Approach 1 : Brute Force 
class Solution {
    findPreSuc(root, key) {
        // code here
        let inorder = [];
        function inorderTraversal(node){
            if(!node){
                return ;
            }
            inorderTraversal(node.left);
            inorder.push(node);
            inorderTraversal(node.right);
        }
        inorderTraversal(root);
        let pre=null, succ=null;
        for(let i=0;i<inorder.length;i++){
            if(inorder[i].data<key){
                pre=inorder[i];
            }else if(inorder[i].data>key){
                succ=inorder[i];
                break;
            }
        }
        return [pre,succ];
    }
}

/**
 * @param {Node} root
 * @param {number} key
 * @returns {number[]}
 */

/*
class Node {
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
}
*/
Approach 2 : Optimised Approach 
class Solution {
    findPreSuc(root, key) {
        // code here
        let pre=null;
        let succ=null;
        let curr=root;
        //to find predecessor 
        while(curr){
            if(curr.data<key){
                pre=curr;
                curr=curr.right;
            }else{
                curr=curr.left;
            }
        }
        curr=root;
        //to find successor 
        while(curr){
            if(curr.data>key){
                succ=curr;
                curr=curr.left;
            }else{
                curr=curr.right;
            }
        }
        return [pre,succ];
    }
}
