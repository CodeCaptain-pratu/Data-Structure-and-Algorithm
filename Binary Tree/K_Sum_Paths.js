/**
 * @param {Node} root
 * @param {number} k
 * @return {number}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
/*Approach : Brute Force */
class Solution {
    countPathFromNode(node,sum,k){
        if(node===null){
            return 0;
        }
        let paths=0;
        sum+=node.data;
        if(sum===k){
            paths++;
        }
        paths+=this.countPathFromNode(node.left,sum,k);
        paths+=this.countPathFromNode(node.right,sum,k);
        return paths;
    }
    countAllPaths(root, k) {
        // code here
        if(root===null){
            return 0;
        }
        let res=0;
        res=this.countPathFromNode(root,0,k);
        res+=this.countAllPaths(root.left,k);
        res+=this.countAllPaths(root.right,k);
        return res;
    }
}

/**
 * @param {Node} root
 * @param {number} k
 * @return {number}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
/*Approach 2 : Optimized Approach*/
class Solution {
    countNodeAllPaths(node,k,sum,prefix){
        if(node===null){
            return 0;
        }
        let path=0;
        sum+=node.data;
        path+=prefix[sum-k]||0;
        prefix[sum]=(prefix[sum]||0)+1;
        path+=this.countNodeAllPaths(node.left,k,
        sum,prefix);
        path+=this.countNodeAllPaths(node.right,k,
        sum,prefix);
        prefix[sum]--;
        return path;
    }
    countAllPaths(root, k) {
        // code here
        if(root===null){
            return 0;
        }
        let prefix={0:1};
        let paths=this.countNodeAllPaths(root,k,0,prefix);
        return paths;
    }
}
