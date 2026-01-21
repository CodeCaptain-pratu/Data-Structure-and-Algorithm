/*
### Stock Span Problem

Problem Link : https://www.geeksforgeeks.org/problems/stock-span-problem-1587115621/1

### Brute Force Approach
- Traverse backward from current day
- Count consecutive days with price ≤ current price
- Time Complexity: O(n²)
- Space Complexity: O(1)

Time Complexity  : O(n^2)
Space Complexity : O(1)

*/
class Solution {
    calculateSpan(arr) {
        // code here
        let n=arr.length;
        let result=[];
        for(let i=0;i<n;i++){
            let count=0;
            for(let j=i;j>=0;j--){
                if(arr[j]<=arr[i]){
                    count++;
                }
                else{
                     break;
                }
            }
            result.push(count);
        }
        return result;
    }
}


/*
Approach (Optimized approach)
1) Use a stack to store pairs of (price,span)
2) For Each day's price:
    - Initialize span with 1
    - While the stack is not empty and the top price is less then or equal to the current price  
        - Add the top span the current span
        - Pop the top element 
3) Push the current price along with the computed span     into the stack 
4) Store the span in the result array

Time Complexity  : O(n)
Space Complexity : O(n)
*/
class Solution {
    constructor(){
        this.st=[];
    }
    findSpan(price){
        let span=1;
        while(this.st.length>0 && this.st[this.st.length-1][0]<=price){
            let spanOfTopElement=this.st[this.st.length-1][1];
            span+=spanOfTopElement;
            this.st.pop();
        }
        this.st.push([price,span]);
        return span;
    }
    calculateSpan(arr) {
        // code here
       let result=[];
       for(let i=0;i<arr.length;i++){
           let countSpan=this.findSpan(arr[i]);
           result.push(countSpan);
       }
       return result;
    }
}