/**
 * @param {number[]} files
 * @return {number}
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    // Insert element
    push(val) {
        this.heap.push(val);
        let i = this.heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (this.heap[parent] <= this.heap[i]) break;

            [this.heap[parent], this.heap[i]] =
                [this.heap[i], this.heap[parent]];

            i = parent;
        }
    }

    // Remove and return smallest element
    pop() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        let min = this.heap[0];
        this.heap[0] = this.heap.pop();

        let i = 0;
        let n = this.heap.length;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;

            if (left < n &&
                this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if (right < n &&
                this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] =
                [this.heap[smallest], this.heap[i]];

            i = smallest;
        }

        return min;
    }
}



class Solution {
    minComputation(files) {
        // code here
        let pq = new MinHeap();
        for(let file of files){
            pq.push(file);
        }
        let cost=0;
        while(pq.size()>1){
            let a = pq.pop();
            let b = pq.pop();
            let sum = a+b;
            cost+=sum;
            pq.push(sum);
        }
        return cost;
    }
}
