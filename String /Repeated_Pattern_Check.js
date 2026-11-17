class Solution {
    findPattern(s) {
        // code here
        let i=0;
        let n=s.length;
        let count=0;
        while(i<n){
           while(i<n && s[i]==="x"){
                count++;
                i++;
           }
           while(i<n && s[i]==="y"){
                count--;
                i++;
           }
           if(count<0 || count>0){
               return false;
           }
        }
        return count===0;
    }
}
