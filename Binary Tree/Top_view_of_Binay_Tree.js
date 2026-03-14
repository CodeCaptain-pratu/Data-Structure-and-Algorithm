/**
 * @param {Node} root
 * @returns {number[]}
 */

/*
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
class Solution {
    topView(root) {
        // code here
        let mp=new Map();
        let q=[];
        q.push({node:root, hd:0});
        while(q.length){
            let {node,hd}=q.shift();
            if(!mp.has(hd)){
                mp.set(hd,node.data);
            }
            if(node.left){
                q.push({node:node.left,
                    hd:hd-1
                })
            }
            if(node.right){
                q.push({
                    node:node.right,
                    hd:hd+1
                })
            }
        }
        let ans=[];
        let sorted=[...mp.keys()].sort((a,b)=>
        a-b);
        for(let keys of sorted){
            ans.push(mp.get(keys));
        }
        return ans;
    }
}
