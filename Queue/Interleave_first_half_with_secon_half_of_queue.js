/**
 * @param {queue[]} q
 * @returns {void}
 */


/*
### Approach :
1) Create a new temporary Queue
2) Move the first half of the original Queue into the temporary queue
3) While temporary queue is not empty 
  - enqueue the first element of the temporary Queue to Original Queue and dequeue it from the temporary Queue
  - enqueue the first element of the Original Queue (Which belongs to the second half) back into the Original Queue 
  and dequeue it from the Original Queue.

Time Complexity  :O(n) 
Space Complexity :O(n/2) = O(n)
*/

class Solution {
    rearrangeQueue(q) {
        // code here
        let t1=new Queue();
        let n=q.len()/2;
        let nc=n;
        while(n--){
            t1.enqueue(q.peek());
            q.dequeue();
        }
        n=nc;
        while(n--){
            q.enqueue(t1.peek());
            t1.dequeue();
            
            q.enqueue(q.peek());
            q.dequeue();
        }
    }
}

/**
// Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Custom Queue class
class Queue {
    constructor() {
        this.front = this.rear = null;
        this.size = 0;
    }

    isEmpty() { return this.front === null; }

    enqueue(data) {
        const node = new Node(data);
        if (this.isEmpty()) {
            this.front = this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        this.front = this.front.next;
        if (!this.front) this.rear = null;
        this.size--;
    }

    peek() { return this.front ? this.front.data : null; }

    len() { return this.size; }
}
*/
