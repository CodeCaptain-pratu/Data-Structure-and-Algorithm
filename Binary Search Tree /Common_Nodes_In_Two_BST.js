/* Structure of a Binary Search Tree node
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
};
*/

/**
 * @param {Node} r1
 * @param {Node} r2
 * @return {Number[]}
 */

class Solution {
    findCommon(r1, r2) {
        // code here
        let st = new Set();
        function storeNode(node){
            if(!node){
                return;
            }
            st.add(node.data);
            storeNode(node.left);
            storeNode(node.right);
        }
        storeNode(r1);
        let ans=[];
        function findCommonNode(node){
            if(!node){
                return;
            }
            findCommonNode(node.left);
            if(st.has(node.data)){
                ans.push(node.data);
            }
            findCommonNode(node.right);
        }
        findCommonNode(r2);
        return ans;
    }
}



/* Structure of a Binary Search Tree node
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
};
*/

/**
 * @param {Node} r1
 * @param {Node} r2
 * @return {Number[]}
 */

class Solution {
    findCommon(r1, r2) {
        // code here
        let arr1 = [];
        let arr2 = [];
        function inorder(node,arr){
            if(!node){
                return;
            }
            inorder(node.left,arr);
            arr.push(node.data);
            inorder(node.right,arr);
        }
        inorder(r1,arr1);
        inorder(r2,arr2);
        let ans = [];
        let i=0, j=0;
        while(i<arr1.length && j<arr2.length){
            if(arr1[i]===arr2[j]){
                ans.push(arr1[i]);
                i++;
                j++;
            }else if(arr1[i]<arr2[j]){
                i++;
            }else{
                j++;
            }
        }
        return ans;
    }
}
