/**
 * @param {number} V
 * @param {number[][]} edges
 * @returns {number}
 */
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(node) {
        this.heap.push(node);
        this._bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown(0);
        return top;
    }
     isEmpty() {
        return this.heap.length === 0;
    }

    _bubbleUp(index) {
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[parent].time <= this.heap[index].time) break;
            [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }
        _bubbleDown(index) {
        let n = this.heap.length;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < n && this.heap[left].time < this.heap[smallest].time)
                smallest = left;

            if (right < n && this.heap[right].time < this.heap[smallest].time)
                smallest = right;

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];

            index = smallest;
        }
    }
}

class Solution {
    countPaths(V, edges) {
        // code here
        let adj=Array.from({length:V},()=>[]);
        for(let [u,v,t] of edges){
            adj[u].push([v,t]);
            adj[v].push([u,t]);
        }
        let pq=new MinHeap();
        let dist=new Array(V).fill(Infinity);
        let ways=new Array(V).fill(0);
        dist[0]=0;
        ways[0]=1;
        pq.push({time:0,node:0});
        while(!pq.isEmpty()){
            let {time:currTime, node:currNode}=pq.pop();
            if(currTime>dist[currNode]){
                continue;
            }
            for(let [next, roadTime] of adj[currNode]){
                if(currTime+roadTime<dist[next]){
                    dist[next]=currTime+roadTime;
                    ways[next]=ways[currNode];
                    pq.push({time:dist[next],node:next});
                }
                else if(currTime+roadTime==dist[next]){
                    ways[next]=ways[next]+ways[currNode];
                }
            }
        }
        return ways[V-1];
    }
}
