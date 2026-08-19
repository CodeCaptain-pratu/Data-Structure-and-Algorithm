
//Brute Force 
class Solution {
    countTriplets(arr, l, r) {
        // code here
        let n=arr.length;
        let count = 0;
        for(let i=0;i<n;i++){
            for(let j=i+1;j<n;j++){
                for(let k=j+1;k<n;k++){
                    let sum=arr[i]+arr[j]+arr[k];
                    if(sum>=l && sum<=r){
                        count++;
                    }
                }
            }
        }
        return count;
    }
}


//Optimize Approach 
class Solution {
    countTriplets(arr, l, r) {
        // code here
        let n = arr.length;
        arr.sort((a,b)=>a-b);
        function countLessThan(x){
            let count =0;
            for(let i=0;i<n-2;i++){
            let left = i+1;
            let right = n-1;
            while(left<right){
                let sum=arr[i]+arr[left]+arr[right];
                if(sum<=x){
                    count+=right-left;
                    left++;
                }
                else{
                    right--;
                }
            }
          }
          return count;
        }
        return countLessThan(r) - countLessThan(l-1);
    }
}
