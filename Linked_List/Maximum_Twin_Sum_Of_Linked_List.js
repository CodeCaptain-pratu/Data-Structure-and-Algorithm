/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let slow = head;
    let fast = head;

    while ( fast !== null && fast.next !== null ) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    let current = slow;

    while ( current !== null ) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    let maxSum = 0;
    let firstHalf = head;
    let secondHalf = prev;

    while ( secondHalf !== null ) {
        let currentSum = firstHalf.val + secondHalf.val;
        if ( currentSum > maxSum ) {
            maxSum = currentSum;
        }

        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    return maxSum;
};
