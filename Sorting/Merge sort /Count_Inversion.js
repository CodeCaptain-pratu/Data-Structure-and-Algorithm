/**
 * @param {number[]} arr
 * @returns {number}
 */
/* Approach: Brute force */
class Solution {
    inversionCount(arr) {
        // code here
        let n=arr.length;
        let count=0;
        for(let i=0;i<n;i++){
            for(let j=i+1;j<n;j++){
                if(arr[i]>arr[j]){
                    count++;
                }
            }
        }
        return count;
    }
}

/*Approach: Optimize*/
class Solution {

    merge(arr, low, mid, high){
        let temp = [];
        let left = low;
        let right = mid + 1;
        let count = 0;

        while(left <= mid && right <= high){

            if(arr[left] <= arr[right]){
                temp.push(arr[left]);
                left++;
            }else{
                temp.push(arr[right]);
                
                // inversion count
                count += (mid - left + 1);
                right++;
            }
        }

        while(left <= mid){
            temp.push(arr[left++]);
        }

        while(right <= high){
            temp.push(arr[right++]);
        }

        for(let i=low;i<=high;i++){
            arr[i] = temp[i-low];
        }

        return count;
    }

    mergeSort(arr, low, high){
        let count = 0;

        if(low >= high) return 0;

        let mid = Math.floor((low + high)/2);

        count += this.mergeSort(arr, low, mid);
        count += this.mergeSort(arr, mid+1, high);
        count += this.merge(arr, low, mid, high);

        return count;
    }

    inversionCount(arr){
        return this.mergeSort(arr, 0, arr.length-1);
    }
}
