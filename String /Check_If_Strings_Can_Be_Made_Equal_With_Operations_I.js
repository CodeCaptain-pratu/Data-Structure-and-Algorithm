/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
//Approach I : 
var canBeEqual = function(s1, s2) {
    let condition1=(((s1[0]===s2[0]) && (s1[2]===s2[2])) || ((s1[0]===s2[2]) && (s1[2]===s2[0])));
    let condition2=(((s1[1]===s2[1]) && (s1[3]===s2[3])) || ((s1[1]===s2[3]) && (s1[3]===s2[1])));
    return condition1 && condition2;
};

//Approach 2 :
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    let even=new Array(26).fill(0);
    let odd=new Array(26).fill(0);
    for(let i=0;i<4;i++){
        let idx1=s1.charCodeAt(i)-'a'.charCodeAt(0);
        let idx2=s2.charCodeAt(i)-'a'.charCodeAt(0);
        if(i%2===0){
            even[idx1]++;
            even[idx2]--;
        }else{
            odd[idx1]++;
            odd[idx2]--;
        }
    }
    for(let i=0;i<26;i++){
        if(even[i]!==0 || odd[i]!==0){
            return false;
        }
    }
    return true;
};
