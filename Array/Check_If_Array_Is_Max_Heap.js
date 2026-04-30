/**
 * @param {number[]} arr
 * @return {number}
 */
class Solution {
    isMaxHeap(arr) {
        // code here
        let n = arr.length;
        for(let i=0;i<n;i++){
            let leftchild = 2*i+1;
            let rightchild = 2*i+2;
            
            if(leftchild<n && arr[i]<arr[leftchild]){
                return false;
            }
            if(rightchild<n && arr[i]<arr[rightchild]){
                return false;
            }
        }
        return true;
    }
}
