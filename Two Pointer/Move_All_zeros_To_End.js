/**
 * @param {Number[]} arr
 * @returns {void}
 */
/*Approach 1 : Brute force */
class Solution {
    pushZerosToEnd(arr) {
        // code here
       let n=arr.length;
       let zero=0;
       let numbers=[];
       for(let i=0;i<n;i++){
           if(arr[i]===0){
               zero++;
           }else{
               numbers.push(arr[i]);
           }
       }
       let i=0;
       while(i<n && i<numbers.length){
           arr[i]=numbers[i];
           i++;
       }
       while(i<n && zero){
          arr[i]=0;
          zero--;
          i++;
       }
    }
}

/**
 * @param {Number[]} arr
 * @returns {void}
 */
/*Approach 2 : Two pointer */
class Solution {
    pushZerosToEnd(arr) {
        // code here
        let left=0;
        let mid=0;
        while(mid<arr.length){
            if(arr[mid]!==0){
                let temp=arr[left];
                arr[left]=arr[mid];
                arr[mid]=temp;
                left++;
                mid++;
            }else{
                mid++;
            }
        }
    }
}
