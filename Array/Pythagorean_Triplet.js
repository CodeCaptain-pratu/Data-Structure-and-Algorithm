/**
 * @param {number[]} arr
 * @return {boolean}
 */

class Solution {
    pythagoreanTriplet(arr) {
        // code here
        let n=arr.length;
        for(let i=0;i<n;i++){
            for(let j=i+1;j<n;j++){
                for(let k=j+1;k<n;k++){
                    let a=arr[i]*arr[i];
                    let b=arr[j]*arr[j];
                    let c=arr[k]*arr[k];
                    if(a+b===c || a+c===b
                    || b+c===a){
                        return true;
                    }
                }
            }
        }
        return false;
    }
}

/**
 * @param {number[]} arr
 * @return {boolean}
 */

class Solution {
    pythagoreanTriplet(arr) {
        // code here
        let n=arr.length;
        for(let i=0;i<n;i++){
            arr[i]=arr[i]*arr[i];
        }
        arr.sort((a,b)=>a-b);
        for(let i=n-1;i>=2;i--){
            let left=0;
            let right=i-1;
            let target=arr[i];
            while(left<right){
                let sum=arr[left]+
                arr[right];
                if(sum===target){
                    return true;
                }else if(sum<target){
                    left++;
                }else{
                    right--;
                }
            }
        }
        return false;
    }
}

/**
 * @param {number[]} arr
 * @return {boolean}
 */

class Solution {
    pythagoreanTriplet(arr) {
        // code here
        let n=arr.length;
        let st=new Set();
        for(let num of arr){
            st.add(num*num);
        }
        for(let i=0;i<n;i++){
            for(let j=i+1;j<n;j++){
                let sum=arr[i]*arr[i]+
                arr[j]*arr[j];
                if(st.has(sum)){
                    return true;
                }
            }
        }
        return false;
    }
}
