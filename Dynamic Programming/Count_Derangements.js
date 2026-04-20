class Solution {
    derangeCount(n) {
        // code here
        if(n===1){
            return 0;
        }
        if(n===2){
            return 1;
        }
        let prev1=0;
        let prev2=1;
        for(let i=3;i<=n;i++){
            let current = (i-1)*(prev1+prev2);
            prev1=prev2;
            prev2=current;
        }
        return prev2;
    }
}
