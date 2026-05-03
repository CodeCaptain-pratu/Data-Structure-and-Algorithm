//Approach 1 : Brute Force 
class Solution {
    sortBySetBitCount(arr) {
        // code here
        function countSetBits(num){
            let count=0;
            while(num>0){
                let r = num%2;
                if(r===1){
                    count++;
                }
                num = Math.floor(num/2);
            }
            return count;
        }
        arr.sort((a,b)=>{
            let countA = countSetBits(a);
            let countB = countSetBits(b);
            if(countA>countB){
                return -1;
            }
            if(countA<countB){
                return 1;
            }
            return 0;
        });
        return arr;
    }
};
//Approach 2 : 
class Solution {
    sortBySetBitCount(arr) {
        // code here
        function countSetBits(num){
            let count=0;
            while(num>0){
                num = (num & (num - 1));
                count++;
            }
            return count;
        }
        arr.sort((a,b)=>{
            let countA = countSetBits(a);
            let countB = countSetBits(b);
            if(countA>countB){
                return -1;
            }
            if(countA<countB){
                return 1;
            }
            return 0;
        });
        return arr;
    }
};
