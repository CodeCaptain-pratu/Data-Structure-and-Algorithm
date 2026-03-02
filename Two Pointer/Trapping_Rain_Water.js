/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    maxWater(arr) {
        // code here
        let water=0;
        let n=arr.length;
        for(let i=0;i<n;i++){
            let leftmax=0;
            let rightmax=0;
            for(let j=0;j<=i;j++){
                leftmax=Math.max(leftmax,
                arr[j]);
            }
            for(let j=i;j<n;j++){
                rightmax=Math.max(rightmax,
                arr[j]);
            }
            water += Math.min(leftmax,
            rightmax)-arr[i];
        }
        return water;
    }
}

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    maxWater(arr) {
        // code here
        let n=arr.length;
        let left=new Array(n).fill(0);
        let right=new Array(n).fill(0);
        left[0]=arr[0];
        right[n-1]=arr[n-1];
        for(let i=1;i<n;i++){
            left[i]=Math.max(left[i-1],
            arr[i]);
        }
        for(let i=n-2;i>=0;i--){
            right[i]=Math.max(right[i+1],
            arr[i]);
        }
        let water=0;
        for(let i=0;i<n;i++){
            water+=Math.min(left[i],
            right[i])-arr[i];
        }
        return water;
    }
}

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    maxWater(arr) {
        // code here
        let leftmax=0;
        let rightmax=0;
        let n=arr.length;
        let l=0, r=n-1;
        let water=0;
        while(l<r){
            if(arr[l]<=arr[r]){
                if(arr[l]>leftmax){
                    leftmax=arr[l];
                }else{
                    water+=leftmax-arr[l];
                }
                l++;
            }else{
                if(arr[r]>rightmax){
                    rightmax=arr[r];
                }else{
                    water+=rightmax-arr[r];
                }
                r--;
            }
        }
        return water;
    }
}
