/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    let mod=1e9+7;
    let sum=0;
    let count=0,odd=0,even=1;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        if(sum%2===0){
            count=(count+odd)%mod;
            even++;
        }
        else{
            count=(count+even)%mod;
            odd++;
        }
    }
    return count;
};
