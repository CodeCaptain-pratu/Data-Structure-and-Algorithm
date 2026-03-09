/**
 * @param {string} s
 * @returns {boolean}
 */
Approach : Brute Force 
class Solution {
    largestSwap(s) {
        // code here
        let n=s.length;
        let arr=s.split("");
        let maxStr=s;
        for(let i=0;i<n;i++){
            for(let j=i+1;j<n;j++){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
                let newStr=arr.join("");
                if(newStr>maxStr){
                    maxStr=newStr;
                }
                let temp2=arr[i];
                arr[i]=arr[j];
                arr[j]=temp2;
            }
        }
        return maxStr;
    }
}

/**
 * @param {string} s
 * @returns {boolean}
 */
Approach 2 : Better approach 
class Solution {
    largestSwap(s) {
        // code here
        let n=s.length;
        s=s.split("");
        let maxRight=new Array(n);
        maxRight[n-1]=n-1;
        for(let i=n-2;i>=0;i--){
            let maxRightIdx=maxRight[i+1];
            let maxRightElement=s[maxRightIdx];
            maxRight[i]=s[i]>maxRightElement?i:maxRightIdx;
        }
        for(let i=0;i<n;i++){
            let maxRightIdx=maxRight[i];
            let maxRightElement=s[maxRightIdx];
            if(s[i]<maxRightElement){
                let temp=s[i];
                s[i]=s[maxRightIdx];
                s[maxRightIdx]=temp;
                return s.join("");
            }
        }
        return s.join("");
    }
}

/**
 * @param {string} s
 * @returns {boolean}
 */
Approach 3 : Optimised Approach 
class Solution {
    largestSwap(s) {
        // code here
        let n=s.length;
        let last=new Array(10).fill(-1);
        let arr=s.split("");
        for(let i=0;i<n;i++){
            last[arr[i]]=i;
        }
        for(let i=0;i<n;i++){
            for(let d=9;d>arr[i];d--){
                if(last[d]>i){
                    let temp=arr[i];
                    arr[i]=arr[last[d]]
                    arr[last[d]]=temp;
                    return arr.join("");
                }
            }
        }
        return s;
    }
}
