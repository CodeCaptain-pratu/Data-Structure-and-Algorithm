/**
 * @param {string} s
 * @return {number}
 */
/* Approach - Brute force*/
var longestBalanced = function(s) {
    let maxl=0;
    for(let i=0;i<s.length;i++){
        let count1=0, count2=0, count3=0;
        for(let j=i;j<s.length;j++){
            if(s[j]==="a"){
                count1++;
            }
            if(s[j]==="b"){
                count2++;
            }
            if(s[j]==="c"){
                count3++;
            }
            let arr=[];
            if(count1>0){
                arr.push(count1);
            }
            if(count2>0){
                arr.push(count2);
            }
            if(count3>0){
                arr.push(count3);
            }
            let isBalanced = arr.every(val=>arr[0]===val);
            if(isBalanced){
                maxl=Math.max(maxl,j-i+1);
            }
        }
    }
    return maxl;
};

/*Approach 2 - optimize*/
/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {
    //case 1
    let maxL=0;
    let count=1;
    for(let i=1;i<s.length;i++){
        if(s[i]===s[i-1]){
            count++;
        }else{
            maxL=Math.max(maxL,count);
            count=1;
        }
    }
    maxL=Math.max(maxL,count);
    //case 2
     function helper(ch1,ch2){
        let count1=0;
        let count2=0;
        let diffMp=new Map();
        diffMp.set(0,-1);
        let localmax=0;
        for(let i=0;i<s.length;i++){
            if(s[i]!==ch1 && s[i]!==ch2){
                count1=0;
                count2=0;
                diffMp.clear();
                diffMp.set(0,i);
                continue;
            }
            if(s[i]===ch1){count1++;}
            if(s[i]===ch2){count2++;}
            if(count1===count2){
                localmax=Math.max(localmax,count1+count2);
            }
            let diff=count1-count2;
            if(diffMp.has(diff)){
                localmax=Math.max(localmax,i-(diffMp.get(diff)));
            }else{
                diffMp.set(diff,i);
            }
        }
        return localmax;
    }
    maxL=Math.max(maxL,helper("a","b"));
    maxL=Math.max(maxL,helper("a","c"));
    maxL=Math.max(maxL,helper("b","c"));

    //case 3

    let countA=0, countB=0, countC=0;
    let mp=new Map();
    mp.set("0_0",-1);
    for(let i=0;i<s.length;i++){
        if(s[i]==="a") {countA++;}
        if(s[i]==="b"){countB++;}
        if(s[i]==="c"){countC++;}
        if(countA===countB && countB===countC){
            maxL=Math.max(maxL,countA+countB+countC);
        }
        let diffAB=countA - countB;
        let diffAC=countA - countC;
        let key = diffAB+"_"+diffAC;
        if(mp.has(key)){
            maxL=Math.max(maxL,i- (mp.get(key)));
        }else{
            mp.set(key,i);
        }
    }
    return maxL;
};
