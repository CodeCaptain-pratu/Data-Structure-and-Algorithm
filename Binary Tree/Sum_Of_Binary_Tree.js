/*
Definition for Node
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
/**
 * @param Node root
 * @returns number
 */
class Solution {
    getSize(root) {
        // code here
        let q = [];
        q.push(root);
        let count=0;
        while(q.length>0){
            let node=q.shift();
            count++;
            if(node.left){
                q.push(node.left);
            }
            if(node.right){
                q.push(node.right);
            }
        }
        return count;
    }
}

/*
Definition for Node
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
/**
 * @param Node root
 * @returns number
 */
class Solution {
    getSize(root) {
        // code here
        if(!root){
            return 0;
        }
        return 1+this.getSize(root.left)+
        this.getSize(root.right);
    }
}
