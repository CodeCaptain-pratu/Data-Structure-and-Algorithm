class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let i = this.heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (this.heap[parent][0] <= this.heap[i][0]) break;

            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        let top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);

        return top;
    }

    bubbleDown(i) {
        let n = this.heap.length;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;

            if (left < n && this.heap[left][0] < this.heap[smallest][0]) {
                smallest = left;
            }

            if (right < n && this.heap[right][0] < this.heap[smallest][0]) {
                smallest = right;
            }

            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}
class Solution {
    MST(adj,V){
        let isMST=new Array(V).fill(false);
        let pq=new MinHeap();
        pq.push([0,0]);
        let sum=0;
        while(!pq.isEmpty()){
            let [wt,node]=pq.pop();
            if(isMST[node]){
                continue;
            }
            isMST[node]=true;
            sum+=wt;
            for(let [nbr,nbr_wt] of adj[node]){
                if(!isMST[nbr]){
                    pq.push([nbr_wt,nbr]);
                }
            }
        }
        return sum;
    }
}
