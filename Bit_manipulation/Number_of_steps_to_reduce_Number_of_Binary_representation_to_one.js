/**
 * @param {string} s
 * @return {number}
 */
/*Approach 1 */
var numSteps = function(s) {
    let num=parseInt(s,2);
    let steps=0;
    while(num>1){
        if(num%2!==0){
            num=num+1;
        }else{
            num=Math.floor(num/2);
        }
        steps++;
    }
    return steps;
};

/**
 * @param {string} s
 * @return {number}
 */
/*Approach 2 */
var numSteps = function(s) {
    let arr=s.split("");
    function addOne(arr){
        let n=arr.length;
        let i=n-1;
        while(i>=0 && arr[i]!=="0"){
            arr[i]="0";
            i--;
        }
        if(i<0){
            arr.unshift("1");
        }else{
            arr[i]="1";
        }
    }
    let op=0;
    while(arr.length>1){
        if(arr[arr.length-1]==="0"){
            arr.pop();
        }else{
            addOne(arr);
        }
        op++;
    }
    return op;
};

/**
 * @param {string} s
 * @return {number}
 */
/*Approach 3 */
var numSteps = function(s) {
    let n=s.length;
    let carry=0, op=0;
    for(let i=n-1;i>=1;i--){
        let bit = Number(s[i]);
        if((bit+carry)%2===1){
            op+=2;
            carry=1;
        }else{
            op+=1;
        }
    }
    return op+carry;
};
