/**
 * @param {number[]} arr
 * @return {number}
 */
//Approach 1 : Brute Force 
class Solution {
    countIncreasing(arr) {
        // code here.
        let count=0;
        let n=arr.length;
        for(let i=0;i<n;i++){
            for(let j=i;j<n;j++){
                if(j+1<n){
                    if(arr[j]<arr[j+1]){
                        count++;
                    }
                    else{
                        break;
                    }
                }
            }
        }
        return count;
    }
}

/**
 * @param {number[]} arr
 * @return {number}
 */
//Approach 2 : Sliding Window 
class Solution {
    countIncreasing(arr) {
        // code here
        let i=0;
        let j=0;
        let n=arr.length;
        let count=0;
        while(j+1<n){
            if(arr[j]<arr[j+1]){
                count+=((j+1)-i);
            }
            else{
                i=j+1;
            }
            j++;
        }
        return count;
    }
}
