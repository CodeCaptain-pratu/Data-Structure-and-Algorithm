/**
 * @param {string} s
 * @return {number}
 */
Approach 1 : Brute Force 
var minFlips = function(s) {
    let ans=Infinity;
    for(let r=0;r<s.length;r++){
        let flip1=0, flip2=0;
        for(let i=0;i<s.length;i++){
            let pat1=(i%2===0)?"0":"1";
            let pat2=(i%2===0)?"1":"0";
            if(s[i]!==pat1){
                flip1++;
            }
            if(s[i]!==pat2){
                flip2++;
            }
        }
        ans=Math.min(flip1,flip2,ans);
        s=s.slice(1)+s[0];
    }
    return ans
};

/**
 * @param {string} s
 * @return {number}
 */
Approach 2 : Sliding Window 
var minFlips = function(s) {
    let ans=Infinity;
    let n=s.length;
    let s1=s+s;
    let pat1="", pat2="";
    for(let i=0;i<2*n;i++){
        pat1+=(i%2===0)?"1":"0";
        pat2+=(i%2===0)?"0":"1";
    }
    let i=0,j=0;
    let flip1=0, flip2=0;
    while(j<2*n){
        if(s1[j]!==pat1[j]){
            flip1++;
        }
        if(s1[j]!==pat2[j]){
            flip2++;
        }
        while(j-i+1>n){
            if(pat1[i]!=s1[i]){
                flip1--;
            }
            if(pat2[i]!==s1[i]){
                flip2--;
            }
            i++;
        }
        if(j-i+1===n){
            ans=Math.min(ans,flip1,flip2);
        }
        j++;
    }
    return ans;
};

/**
 * @param {string} s
 * @return {number}
 */

Approach 3 : Sliding Window with Optimized space 
var minFlips = function(s) {
    let ans=Infinity;
    let n=s.length;
    let pat1="", pat2="";
    for(let i=0;i<2*n;i++){
        pat1+=(i%2===0)?"1":"0";
        pat2+=(i%2===0)?"0":"1";
    }
    let i=0,j=0;
    let flip1=0, flip2=0;
    while(j<2*n){
        if(s[j%n]!==pat1[j]){
            flip1++;
        }
        if(s[j%n]!==pat2[j]){
            flip2++;
        }
        while(j-i+1>n){
            if(pat1[i]!=s[i%n]){
                flip1--;
            }
            if(pat2[i]!==s[i%n]){
                flip2--;
            }
            i++;
        }
        if(j-i+1===n){
            ans=Math.min(ans,flip1,flip2);
        }
        j++;
    }
    return ans;
};

/**
 * @param {string} s
 * @return {number}
 */

Approach 4 : Sliding Window with Optimized space 
var minFlips = function(s) {
    let ans=Infinity;
    let n=s.length;
    let i=0,j=0;
    let flip1=0, flip2=0;
    while(j<2*n){
        let pat1=(j%2===0)?"0":"1";
        let pat2=(j%2===0)?"1":"0";
        if(s[j%n]!==pat1){
            flip1++;
        }
        if(s[j%n]!==pat2){
            flip2++;
        }
        while(j-i+1>n){
            pat1=(i%2===0)?"0":"1";
            pat2=(i%2===0)?"1":"0";
            if(pat1!==s[i%n]){
                flip1--;
            }
            if(pat2!==s[i%n]){
                flip2--;
            }
            i++;
        }
        if(j-i+1===n){
            ans=Math.min(ans,flip1,flip2);
        }
        j++;
    }
    return ans;
};
