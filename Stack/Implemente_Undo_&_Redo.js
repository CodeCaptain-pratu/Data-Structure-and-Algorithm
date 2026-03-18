class Solution {
    constructor(){
        this.st=[];
        this.redost=[];
    }
    append(x) {
        // append x into document
        this.st.push(x);
        this.redost=[];
    }

    undo() {
        // undo last change
        if(this.st.length===0){
            return;
        }
        let ch=this.st[this.st.length-1];
        this.st.pop();
        this.redost.push(ch);
    }

    redo() {
        // redo changes
        if(this.redost.length===0){
            return;
        }
        this.st.push(this.redost.pop());
    }

    read() {
        // read the document
        return this.st.join("");
    }
}
