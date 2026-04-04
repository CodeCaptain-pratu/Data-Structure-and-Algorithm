/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
//Approach 1 : Brute force 
var decodeCiphertext = function(encodedText, row) {
    let len=encodedText.length;
    let column = Math.floor(len/row);
    let mat = Array.from({length:row},
                         ()=>new Array(column));
    let idx=0;
    for(let i=0;i<row;i++){
        for(let j=0;j<column;j++){
            mat[i][j]=encodedText[idx++];
        }
    }
    let original="";
    for(let col=0;col<column;col++){
        let i=0;
        let j=col;
        while(i<row && j<column){
            original+=mat[i][j];
            i++;
            j++;
        }
    }
    while(original.length>0 && 
          original[original.length-1]===" "){
             original=original.slice(0,-1);
          }
    return original;
};

// Approach 2 : Optimize 
/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function(encodedText, row) {
    let len=encodedText.length;
    let column = Math.floor(len/row);
    let original = "";
    for(let col=0;col<column;col++){
        for(let j=col;j<len;j+=(column+1)){
            original+=encodedText[j];
        }
    }
    while(original.length>0 &&
          original[original.length-1]===" "){
           original= original.slice(0,-1);
          }
    return original;
};
