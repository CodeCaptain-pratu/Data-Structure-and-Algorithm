
//Approach 1: 
class Solution {
    myAtoi(s) {
        // code here
        let i=0;
        let n=s.length;
        while(i<n && s[i]===" "){
            i++;
        }
        let sign=1;
        if(i<n && (s[i]==="-" || 
        s[i]==="+")){
            if(s[i]==="-"){
                sign=-1;
            }
            i++;
        }
        let num=0;
        while(i<n && (s[i]>='0'
        && s[i]<="9")){
            let digit=s[i]-'0';
            if(num > Math.floor((2**31-1)/10)
            || (num === Math.floor((2**31-1)/10)
            && digit>7)){
                return sign === 1 ? 2147483647
                : -2147483648;
            }
            num=num*10+digit;
            i++;
        }
        return num*sign;
    }
}

//Approach 2: 
class Solution {
    myAtoi(s) {
        // code here
        let i=0;
        let n=s.length;
        while(i<n && s[i]===" "){
            i++;
        }
        let sign=1;
        if(i<n && (s[i]==="-" || s[i]==="+")){
            if(s[i]==="-"){
                sign=-1;
            }
            i++;
        }
        let num=0;
        let max =2147483647;
        let limit = Math.floor(max/10);
        while(i<n && (s[i]>="0" &&
        s[i]<="9")){
            let digit=s[i]-'0';
            if(num>limit || (num===limit && 
            digit>7)){
                return sign===1 ? max :
                - 2147483648;
            }
            num = num*10 +digit;
            i++;
        }
        return num*sign;
    }
}
