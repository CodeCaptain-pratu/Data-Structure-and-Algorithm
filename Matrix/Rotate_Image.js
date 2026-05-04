/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//two steps 
// First Transpose the Matrix
//Second the reverse the Transposed the Matrix 
var rotate = function(matrix) {
    let row=matrix.length;
    let col=matrix[0].length;
    //transpose matrix
    for(let i=0;i<row;i++){
        for(let j=i;j<col;j++){
            let temp=matrix[i][j]
            matrix[i][j]=matrix[j][i];
            matrix[j][i]=temp;
        }
    }
    for(let i=0;i<row;i++){
        let l=0, r=col-1;
        while(l<=r){
            let temp=matrix[i][l];
            matrix[i][l]=matrix[i][r];
            matrix[i][r]=temp;
            l++;
            r--;
        }
    }
};
