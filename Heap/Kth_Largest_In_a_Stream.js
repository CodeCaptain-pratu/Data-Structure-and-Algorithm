/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 */
//Approach 1 : Brute Force 
class Solution {
    kthLargest(arr, k) {
        // code here
        let brr=[];
        let n=arr.length;
        let result = [];
        for(let i=0;i<n;i++){
            brr.push(arr[i]);
            brr.sort((a,b)=>a-b);
            if(brr.length>=k){
                result.push(brr[brr.length-k]);
            }else{
                result.push(-1);
            }
        }
        return result;
    }
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 */
//Approach 2 : Minheap 
class MyMinHeap {
    constructor() {
        this.heap = [];
    }

    getSize() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent] <= this.heap[idx]) break;
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            idx = parent;
        }
    }

    remove() {
        if (this.heap.length === 1) return this.heap.pop();

        let top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }

    bubbleDown() {
        let idx = 0;
        let n = this.heap.length;

        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let smallest = idx;

            if (left < n && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if (right < n && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === idx) break;

            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
            idx = smallest;
        }
    }
}
class Solution {
    kthLargest(arr, k) {
        // code here
        let brr = new MyMinHeap();
        let result = [];
        let n = arr.length
        for(let i=0;i<n;i++){
            brr.insert(arr[i]);
            if(brr.getSize()>k){
                brr.remove();
            }
            if(brr.getSize()<k){
                result.push(-1);
            }else{
                result.push(brr.peek());
            }
        }
        return result;
    }
}
