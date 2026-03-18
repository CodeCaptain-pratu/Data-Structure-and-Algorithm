/**
 * @param {Node} root
 * @return {number}
 */

/*
class Node {
    constructor(x){
        this.data=x;
        this.left=null;
        this.right=null;
    }
}
*/

class Solution {
    distCandy(root) {
        // code here
        let moves=0;
        function solve(root){
          if(!root){
              return 0;
          }
          let l=solve(root.left);
          let r=solve(root.right);
          moves+=Math.abs(l)+Math.abs(r);
          let extraCandies=(l+r+root.data)-1;
          return extraCandies;
        }
        if(!root.left && !root.right){
            return 0;
        }
        solve(root);
        return moves;
    }
}
