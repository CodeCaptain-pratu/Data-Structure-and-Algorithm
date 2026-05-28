/* Structure of binary tree node
class Node{
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
class Solution {
    verticalSum(root) {
        // code here
        let mp=new Map();
        function dfs(node,hd){
            if(!node){
                return;
            }
            mp.set(hd,(mp.get(hd)||0)+node.data);
            dfs(node.left,hd-1);
            dfs(node.right,hd+1);
        }
        dfs(root,0);
        let keys = [...mp.keys()].sort((a,b)=>a-b);
        return keys.map(key=>mp.get(key));
    }
};


/* Structure of binary tree node
class Node{
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
class Solution {
    verticalSum(root) {
        // code here
        let q=[];
        q.push([root,0]);
        let mp=new Map();
        while(q.length){
            let [node,hd]=q.shift();
            //where hd=horizontal distance
            mp.set(hd,(mp.get(hd)||0)+node.data);
            if(node.left){
                q.push([node.left,hd-1]);
            }
            if(node.right){
                q.push([node.right,hd+1]);
            }
        }
        let keys=[...mp.keys()].sort((a,b)=>a-b);
        return keys.map(key=>mp.get(key));
    }
};
