/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let m=a.length, n=b.length;
    let i=m-1, j=n-1;
    let carry=0;
    let result="";
    while(i>=0 || j>=0){
        let sum=carry;
        if(i>=0){
            sum+=Number(a[i]);
            i--;
        }
        if(j>=0){
            sum+=Number(b[j]);
            j--;
        }
        result=(sum%2===0?"0":"1")+result;
        carry=sum>1?1:0;
    }
    if(carry){
        result=carry+result;
    }
    return result;
};
