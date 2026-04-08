/**
 * @param {number[]} arr
 */
//Approach 1 : Counting Approach 
class Solution {
    segregate0and1(arr) {
        // code here
        let zero =0;
        let one=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]===0){
                zero++;
            }else{
                one++;
            }
        }
        let i=0;
        while(zero){
            arr[i]=0;
            i++;
            zero--;
        }
        while(one){
            arr[i]=1;
            i++;
            one--;
        }
    }
}
//Approach 2 : Two pointer 
/**
 * @param {number[]} arr
 */
class Solution {
    segregate0and1(arr) {
        // code here
        let l=0;
        let r=0;
        while(r<arr.length){
            if(arr[r]===0){
                let temp=arr[r];
                arr[r]=arr[l];
                arr[l]=temp;
                l++;
                r++;
            }else{
                r++;
            }
        }
    }
}
