//Approach 1 : Using Sorting 
class Node {
    constructor(freq, minIdx) {
        this.freq = freq;
        this.minIdx = minIdx;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    huffmanCodes(s, f) {

        let pq = [];

        // build initial nodes
        for (let i = 0; i < s.length; i++) {
            pq.push(new Node(f[i], i));
        }

        // sort helper (acts like priority queue)
        const sortPQ = () => {
            pq.sort((a, b) => {
                if (a.freq !== b.freq) return a.freq - b.freq;
                return a.minIdx - b.minIdx;
            });
        };

        sortPQ();

        // edge case
        if (pq.length === 1) return ["0"];

        // build Huffman tree
        while (pq.length > 1) {
            let left = pq.shift();
            let right = pq.shift();

            let parent = new Node(
                left.freq + right.freq,
                Math.min(left.minIdx, right.minIdx)
            );

            parent.left = left;
            parent.right = right;

            pq.push(parent);
            sortPQ();
        }

        let res = [];

        // preorder traversal
        function traverse(node, code) {
            if (!node) return;

            if (!node.left && !node.right) {
                res.push(code);
                return;
            }

            traverse(node.left, code + "0");
            traverse(node.right, code + "1");
        }

        traverse(pq[0], "");

        return res;
    }
}

//Approach 2 : Using Min Heap
class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    left(i) {
        return 2 * i + 1;
    }

    right(i) {
        return 2 * i + 2;
    }

    insert(node) {
        this.heap.push(node);
        this.upHeapify(this.heap.length - 1);
    }

    upHeapify(i) {
        while (i > 0) {
            let p = this.parent(i);

            if (this.compare(this.heap[i], this.heap[p]) < 0) {
                this.swap(i, p);
                i = p;
            } else {
                break;
            }
        }
    }

    extractMin() {
        if (this.heap.length === 1) return this.heap.pop();

        let root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.downHeapify(0);

        return root;
    }

    downHeapify(i) {
        let smallest = i;
        let l = this.left(i);
        let r = this.right(i);

        if (l < this.heap.length && this.compare(this.heap[l], this.heap[smallest]) < 0) {
            smallest = l;
        }

        if (r < this.heap.length && this.compare(this.heap[r], this.heap[smallest]) < 0) {
            smallest = r;
        }

        if (smallest !== i) {
            this.swap(i, smallest);
            this.downHeapify(smallest);
        }
    }

    compare(a, b) {
        // freq first, then idx
        if (a.freq !== b.freq) return a.freq - b.freq;
        return a.idx - b.idx;
    }
}
class Node{
    constructor(freq,idx){
        this.freq=freq;
        this.idx=idx;
        this.left=null;
        this.right=null;
    }
}
class Solution {
    huffmanCodes(s, f) {
        // code here
        let pq=new MinHeap();
        for(let i=0;i<f.length;i++){
            pq.insert(new Node(f[i],i));
        }
        if(pq.size()===1){
            return ["0"];
        }
        while(pq.size()>1){
            let left=pq.extractMin();
            let right=pq.extractMin();
            let parent=new Node(left.freq+
            right.freq,Math.min(left.idx,
            right.idx));
            parent.left=left;
            parent.right=right;
            pq.insert(parent);
        }
        let result = [];
        function dfs(node,code){
            if(!node){
                return;
            }
            if(!node.left && !node.right){
                result[node.idx]=code;
                return;
            }
            dfs(node.left,code+"0");
            dfs(node.right,code+"1");
        }
        dfs(pq.extractMin(),"");
        return result.sort();
    }
}


