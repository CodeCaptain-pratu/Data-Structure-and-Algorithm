/*Approach 1 : Brute force */
class Solution {

    findSum(sr, sc, er, ec, mat){
        let sum = 0;

        for(let i = sr; i <= er; i++){
            for(let j = sc; j <= ec; j++){
                sum += mat[i][j];
            }
        }
        return sum;
    }

    countSquare(mat, x) {

        let row = mat.length;
        let col = mat[0].length;
        let count = 0;

        for(let sr = 0; sr < row; sr++){
            for(let sc = 0; sc < col; sc++){

                for(let er = sr; er < row; er++){
                    for(let ec = sc; ec < col; ec++){

                       
                        if ((er - sr) !== (ec - sc)) continue;

                        let sum = this.findSum(sr, sc, er, ec, mat);

                        if(sum === x){
                            count++;
                        }
                    }
                }
            }
        }

        return count;
    }
}

// Approach 2 : Prefix sum 

class Solution {
    getsum(prefix,sr,sc,er,ec){
        let sum=prefix[er][ec];
        if(sr>0){
            sum-=prefix[sr-1][ec];
        }
        if(sc>0){
            sum-=prefix[er][sc-1];
        }
        if(sr>0 && sc>0){
            sum+=prefix[sr-1][sc-1];
        }
        return sum;
    }
    countSquare(mat, x) {
        // code here
        let m=mat.length;
        let n=mat[0].length; 
        let prefix=Array.from({length:m},()=>Array(n).fill(0));
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                prefix[i][j]=mat[i][j];
                if(i>0){
                    prefix[i][j]+=prefix[i-1][j];
                }
                if(j>0){
                    prefix[i][j]+=prefix[i][j-1];
                }
                if(i>0 && j>0){
                    prefix[i][j]-=prefix[i-1][j-1];
                }
            }
        }
        
        let count=0;
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                for(let size=0;i+size<m && j+size<n;size++){
                    let er=i+size;
                    let ec=j+size;
                    let sum=this.getsum(prefix,i,j,er,ec);
                    if(sum===x){
                        count++;
                    }
                }
            }
        }
        return count;
    }
}
