/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
/*
### Approach (Dijkstra Algorithm) 
1) Build an adjacency list. For every edge (u -> v,wt) and also add reverse edge ( v-> u ) with cost 2*wt  

2) Use a Min Heap (Priority queue) to always process the node with the smallest current distance 

3) Maintain a distance array to store the minimum cost to reach each node from 0.

4) Pop the node with smallest distance from the heap

5) For each adjacent node relax the edge :
   If current distance + edge weight < known distance update it and push it into the heap.

6) Stop early when we reach node (n-1) as Dijkstra guarantees the shortest path.

Time complexity  : O((V+E) log V)
Space complexity : O(V+E)
*/
class myMinHeap {
    constructor() {
        this.heap = [];
    }

    push(node) {
        this.heap.push(node);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent][0] <= this.heap[idx][0]) break;
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            idx = parent;
        }
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }

    bubbleDown() {
        let idx = 0;
        const length = this.heap.length;
        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let smallest = idx;

            if (left < length && this.heap[left][0] < this.heap[smallest][0]) {
                smallest = left;
            }
            if (right < length && this.heap[right][0] < this.heap[smallest][0]) {
                smallest = right;
            }
            if (smallest === idx) break;

            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
            idx = smallest;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}
var minCost = function(n, edges) {
  let adj=new Map();
  for(let [u,v,wt] of edges){
    if(!adj.has(u)){
        adj.set(u,[]);
    }
    if(!adj.has(v)){
        adj.set(v,[]);
    }
    adj.get(u).push([v,wt]);
    adj.get(v).push([u,2*wt]);
  }  
  let result=new Array(n).fill(Infinity);
  result[0]=0;
  let pq=new myMinHeap();
  pq.push([0,0]);
  while(!pq.isEmpty()){
    let [d,node]=pq.pop();
    if(node===n-1){
        return d;
    }
    if(d>result[node]){
        continue;
    }
    if(!adj.has(node)){
        continue;
    }
    for(let [adjNode,dist] of adj.get(node)){
        if(d+dist<result[adjNode]){
            result[adjNode]=d+dist;
            pq.push([d+dist,adjNode]);
        }
    }
  }
  return -1;
};
