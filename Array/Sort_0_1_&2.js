/**
 * @param {number[]} arr
 * @returns {void}
 */
/*
Approach 1 :
1) count all zero, one and two from the array 
2) Reassign the same array with counted zero, one and two respectively 

Time Complexity  : O(n) 
Space Complexity : O(1)
*/
class Solution {
    sort012(arr) {
        // code here
        let zero=0, one=0, two=0;
        for(let num of arr){
            if(num===0){
                zero++;
            }
            else if(num===1){
                one++;
            }
            else{
                two++;
            }
        }
        for(let i=0;i<arr.length;){
            while(zero){
                arr[i]=0;
                i++;
                zero--
            }
            while(one){
                arr[i]=1;
                i++;
                one--;
            }
            while(two){
                arr[i]=2;
                i++;
                two--;
            }
        }
    }
}

/**
 * @param {number[]} arr
 * @returns {void}
 */
/*
Approach 2 : (Dutch National Flag) 
1) Take three pointers low, mid and high 
2) If element present at mid index is zero then swap the element present at low index 
   increment low and mid index
3) If element present at mid index is 1 then simply increment the mid index no need to swap 
3) If element present at mid index is 2 then swap the element present at the high index and decrement high index n

Time Complexity  : O(n) 
Space Complexity : O(1) 
*/
class Solution {
    sort012(arr) {
        // code here
        let n=arr.length;
        let l=0, m=0, h=n-1;
        while(m<=h){
            if(arr[m]===0){
                let temp=arr[l];
                arr[l]=arr[m];
                arr[m]=temp;
                l++;
                m++;
            }
            else if(arr[m]===1){
                m++;
            }
            else{
                let temp=arr[h];
                arr[h]=arr[m];
                arr[m]=temp;
                h--;
            }
        }
    }
}
