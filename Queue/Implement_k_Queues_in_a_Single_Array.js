/*
### Approach 
1) Create a constructor,
 - count - Size of the array 
 - total - Count of element present in the array.
 - q     - An array to store the k Queue
2) enqueue -
  - If array is already full then cannot enqueue the element 
  - Else push the element in the ith Queue and increment the total 
    variable 
3) dequeue -
  - If the ith queue is empty then you cannot remove the first element
    of the ith queue then return -1.
  - Else decrement the total variable
  - Return the front element removed from the ith Queue.
4) isEmpty -
  - Check if the ith Queue length is zero then it is empty else not.
5) isFull -
  - If the count of total variable and the size of array matches then it
    is full else not.

Time Complexity  : O(m*n)  Enqueue is O(1), but Dequeue is O(n) due to
                           array shifting.So in the worst case, for m
                           operations,overall complexity becomes O(m*n).
Space Complexity : O(n+k)
*/

class kQueues {
    constructor(n, k) {
        // Initialize your data members
        this.count=n;
        this.total=0;
        this.q=Array.from({length:k},()=>[]);
    }

    enqueue(x, i) {
        // Enqueue element x into queue number i
        if(this.isFull()){
            return;
        }
        this.q[i].push(x);
        this.total++;
    }

    dequeue(i) {
        // Dequeue element from queue number i
        if(this.isEmpty(i)){
            return -1;
        }
        this.total--;
        return this.q[i].shift();
    }

    isEmpty(i) {
        // Check if queue i is empty
        return this.q[i].length===0;
    }

    isFull() {
        // Check if array is full
        return this.count===this.total;
    }
}
