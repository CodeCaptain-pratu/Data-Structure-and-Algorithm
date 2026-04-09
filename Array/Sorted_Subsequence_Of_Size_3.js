//Approach 1: Brute Force 
class Solution {
    find3Numbers(arr) {
        // code here
        let n=arr.length;
        for(let i=0;i<=n-3;i++){
            for(let j=i+1;j<=n-2;j++){
                for(let k=j+1;k<=n-1;k++){
                    if(arr[i]<arr[j] && arr[j]<arr[k]){
                        return [arr[i],arr[j],arr[k]];
                    }
                }
            }
        }
        return [];
    }
}

//Approach 2 : using prefix suffix 
class Solution {
    find3Numbers(arr) {
        // code here
        let n=arr.length;
        let minPre=new Array(n);
        let maxSuff=new Array(n);
        minPre[0]=arr[0];
        for(let i=1;i<n;i++){
            minPre[i]=Math.min(minPre[i-1],arr[i-1]);
        }
        maxSuff[n-1]=arr[n-1];
        for(let i=n-2;i>=0;i--){
            maxSuff[i]=Math.max(maxSuff[i+1],arr[i+1]);
        }
        for(let i=0;i<n;i++){
            if(minPre[i]<arr[i] && arr[i]<maxSuff[i]){
                return [minPre[i],arr[i],maxSuff[i]];
            }
        }
        return [];
    }
}


//Approach 3 : 
class Solution {
    find3Numbers(arr) {
        // code here
      let num1=Infinity;
      let num2=Infinity;
      let num3=Infinity;
      let temp=Infinity;
      for(let num of arr){
          if(num<=temp){
              temp=num;
          }else if(num<=num2){
              num1=temp;
              num2=num;
          }else{
              num3=num;
              return [num1,num2,num3];
          }
      }
      return [];
    }
}
