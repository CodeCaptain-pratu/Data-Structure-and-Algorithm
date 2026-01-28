/**
 * @param {number[]} arr
 * @returns {void}
 */
/*
### Approach 1 :
1) Count the number of 0s, 1s, and 2s in the array.

2) Overwrite the array with all 0s first, then 1s, and finally 2s based on the counts

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
### Approach 2 : (Dutch National Flag)
1) Maintain three pointers: low, mid, and high.

2) If the element at mid is 0, swap it with the element at low, then increment both low and mid.

3) If the element at mid is 1, just increment mid.

4) If the element at mid is 2, swap it with the element at high, then decrement high.

Time Complexity: O(n)
Space Complexity: O(1)
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
