/*Approach - 
1) A number can have at most 32 set bits (for 32-Bit Integers) 
2) Store primary numbers till 32 in set 
3) Traverse i from left to right 
4) If the count of set bits in ith number is prime number
   Increment the count of primary set bits
5) Return the count of primary set bits.

Time Complexity : O(right-left+1) + O(log n) 
Space Complexity : 0(11) => O(1)*/ 

var countPrimeSetBits = function(left, right) {
    let prime=new Set([2,3,5,7,11,13,17,19,23,29,31]);
    function convertBinaryAndCountOnes(num){
        let countOne=0;
        while(num>0){
            let bit=num%2;
            if(bit===1){
                countOne++;
            }
            num=Math.floor(num/2);
        }
        return countOne;
    }
    let i=left;
    let countPrimeSetBits=0;
    while(i<=right){
        let count=convertBinaryAndCountOnes(i);
        if(prime.has(count)){
            countPrimeSetBits++;
        }
        i++;
    }
    return countPrimeSetBits;
};
