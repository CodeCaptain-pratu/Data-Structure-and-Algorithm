Twoclass Solution {
    minSteps(m, n, d) {
        // code here
        function pour(fromcap, tocap, d){
            let from=fromcap;
            let to=0;
            let step=1;
            while(from!==d && to!==d){
                let temp=Math.min(from, tocap-to);
                from-=temp;
                to+=temp;
                step++;
                
                if(from===d || to===d){
                    break;
                }
                if(from === 0){
                    from=fromcap;
                    step++;
                }
                if(to===tocap){
                    to=0;
                    step++;
                }
            }
            return step;
        }
        function gcd(a,b){
            return b===0 ? a : gcd(b,a%b);
        }
        if(d > Math.max(m,n)){
            return -1;
        }
        if(d % gcd(m,n)!==0){
            return -1;
        }
        return Math.min(pour(m,n,d), pour(n,m,d));
    }
}
