/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
Approach 1 : Brute Force 
var minAbsDiff = function(grid, k) {
    let m=grid.length;
    let n=grid[0].length;
    let result=Array .from({length:m-k+1},()=>
    Array(n-k+1).fill(0));
    for(let i=0;i<=m-k;i++){
        for(let j=0;j<=n-k;j++){
            let st=new Set();
            for(let r=i;r<i+k;r++){
                for(let c=j;c<j+k;c++){
                    st.add(grid[r][c]);
                }
            }
            let arr=Array.from(st).sort((a,b)=>
            a-b);
            if(arr.length===1){
                continue;
            }
            let mindiff=Infinity;
            for(let i=1;i<arr.length;i++){
                mindiff=Math.min(mindiff,
                Math.abs(arr[i]-arr[i-1]));
            }
            result[i][j]=mindiff;
        }
    }
    return result;
};

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
Approach 2 : Sliding Window 
var minAbsDiff = function(grid, k) {
    let m=grid.length;
    let n=grid[0].length;
    let result=Array.from({length:m-k+1},()=>
    Array(n-k+1).fill(0));
    function getMinDiff(mp){
        let arr=Array.from(mp.keys()).sort((a,b)=>
        a-b);
        if(arr.length<=1){
            return 0;
        }
        let mindiff=Infinity;
        for(let i=1;i<arr.length;i++){
            mindiff=Math.min(mindiff,
            Math.abs(arr[i]-arr[i-1]));
        }
        return mindiff;
    }
    for(let i=0;i<=m-k;i++){
        let mp=new Map();
        for(let r=i;r<i+k;r++){
            for(let c=0;c<k;c++){
                let val=grid[r][c];
                mp.set(val,(mp.get(val)||0)+1);
            }
        }
        result[i][0]=getMinDiff(mp);
        for(let j=1;j<=n-k;j++){
            //remove left column
            for(let r=i;r<i+k;r++){
                let val=grid[r][j-1];
                mp.set(val,(mp.get(val)||0)-1);
                if(mp.get(val)===0){
                    mp.delete(val);
                }
            }

            //add right column
            for(let r=i;r<i+k;r++){
                let val=grid[r][j+k-1];
                mp.set(val,(mp.get(val)||0)+1);
            }
            result[i][j]=getMinDiff(mp);
        }
    }
    return result;
};
