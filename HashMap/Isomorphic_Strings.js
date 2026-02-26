/**
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
/*Approach 1 */
class Solution {
    areIsomorphic(s1, s2) {
        // code here
        if(s1.length!==s2.length){
            return false;
        }
        let mp1=new Map();
        let mp2=new Map();
        for(let i=0;i<s1.length;i++){
            let ch1=s1[i];
            let ch2=s2[i];
            if(mp1.has(ch1) && mp1.get(ch1)!==ch2){
                return false;
            }
            if(mp2.has(ch2) && mp2.get(ch2)!==ch1){
                return false;
            }
            mp1.set(ch1,ch2);
            mp2.set(ch2,ch1);
        }
        return true;
    }
} 

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
/*Approach 2 */
class Solution {
    areIsomorphic(s1, s2) {
        // code here
        let mp=new Map();
        for(let i=0;i<s1.length;i++){
            let key1="s1_"+s1[i];
            let key2="s2_"+s2[i];
            if(mp.get(key1)!== mp.get(key2)){
                return false;
            }
            mp.set(key1,i);
            mp.set(key2,i);
        }
        return true;
    }
}

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */

/*Approach 3 - */
class Solution {
    areIsomorphic(s1, s2) {
        // code here
        let arr1=new Array(26).fill(-1);
        let arr2=new Array(26).fill(-1);
        for(let i=0;i<s1.length;i++){
            let idx1=s1.charCodeAt(i)-97;
            let idx2=s2.charCodeAt(i)-97;
            if(arr1[idx1]!==arr2[idx2]){
                return false;
            }
            arr1[idx1]=i;
            arr2[idx2]=i;
        }
        return true;
    }
}
