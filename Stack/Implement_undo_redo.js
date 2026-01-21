/*
Problem Link :https://www.geeksforgeeks.org/problems/implement-undo-redo/1

Approach :
1) For appending the character push the it into the stack and reset the redo Stack 
2) For undo if the stack is empty you cannot undo the character then simply return else pop the last char from stack and push it to the redo stack
3) For redo stack if you didn't redo before it then the redo stack is empty and you cannot redo then simply return else pop the last character from the redo stack 
4) For read you just have to join the the stack and return 

Time Complexity:
- append: O(1)
- undo: O(1)
- redo: O(1)
- read: O(n) [because join() iterates the stack]

Space Complexity:
- O(n) [for the two stacks]

*/



class Solution {
    constructor(){
        this.st=[];
        this.redoSt=[];
    }
    append(x) {
        // append x into document
        this.st.push(x);
        this.redoSt=[];
    }

    undo() {
        // undo last change
        if(this.st.length===0){
            return;
        }
        let ch=this.st[this.st.length-1];
        this.st.pop();
        this.redoSt.push(ch);
    }

    redo() {
        // redo changes
        if(this.redoSt.length===0){
            return;
        }
        this.st.push(this.redoSt.pop());
    }

    read() {
        // read the document
        return this.st.join("");
    }
}