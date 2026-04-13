//Approach 1 : Brute Force
class Solution {
    isPalinDrome(str){
        let left=0;
        let right=str.length-1;
        while(left<right){
            if(str[left]!==str[right]){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    nextPalindrome(num) {
        // code here
        let number=parseInt(num.join(""));
        while(true){
            number++;
            let str=number.toString();
            if(this.isPalinDrome(str)){
                return str.split("").map(Number);
            }
        }
    }
}

//Approach 2 : 
class Solution {
    greater(result,num){
        for(let i=0;i<result.length;i++){
            if(result[i]>num[i]){
                return true;
            }
            if(result[i]<num[i]){
                return false;
            }
        }
        return false;
    }
    nextPalindrome(num) {
        // code here
        let n=num.length;
        let result=[...num];
        let i=Math.floor((n-1)/2);
        let j=Math.floor(n/2);
        while(i>=0){
            result[j]=result[i];
            i--;
            j++;
        }
        if(this.greater(result,num)){
            return result;
        }
        i=Math.floor((n-1)/2);
        j=Math.floor(n/2);
        let carry=1;
        while(i>=0 && carry>0){
            let sum=result[i]+carry;
            result[i]=sum%10;
            result[j]=result[i];
            carry=Math.floor(sum/10);
            i--;
            j++;
        }
        if(carry>0){
            let res=new Array(n+1).fill(0);
            res[0]=1;
            res[n]=1;
            return res;
        }
        return result;
    }
}
