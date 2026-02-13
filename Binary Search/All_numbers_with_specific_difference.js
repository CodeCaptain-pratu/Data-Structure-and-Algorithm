/**
 * @param number n
 * @param number d
 * @returns number
 */
/*Approach - Brute force*/
class Solution {
    sumOfDigit(num){
        let sum=0;
        while(num!==0){
            let r=num%10;
            sum+=r;
            num=Math.floor(num/10);
        }
        return sum;
    }
    getCount(n, d) {
        // code here
        let count=0;
        let i=1;
        while(i<=n){
            if((i-this.sumOfDigit(i))>=d){
                count++;
            }
            i++;
        }
        return count;
    }
}

/**
 * @param number n
 * @param number d
 * @returns number
 */
/*Approach 2 + optimize*/
class Solution {
    sumOfDigit(num){
        let sum=0;
        while(num!==0){
            let r=num%10;
            sum+=r;
            num=Math.floor(num/10);
        }
        return sum;
    }
    getCount(n, d) {
        // code here
     let l=1,h=n;
     let firstInvalid=-1;
     while(l<=h){
         let mid=Math.floor((l+h)/2);
         if((mid-this.sumOfDigit(mid))>=d){
             firstInvalid=mid;
             h=mid-1;
         }else{
             l=mid+1;
         }
     }
     return firstInvalid===-1?0:n-firstInvalid+1;
    }
}
