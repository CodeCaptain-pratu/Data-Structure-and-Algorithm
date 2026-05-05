/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head===null || head.next===null || k===0){
        return head;
    }
    let len = 1;
    let temp = head;
    while(temp.next!==null){
        len++;
        temp=temp.next;
    }
    if(k%len===0){
        return head;
    }
    k=k%len;
    if(k%len===0){
        return head;
    }
    temp.next=head;
    let newTail = head ;
    let steps = len - k;
    for(let i=1;i<steps;i++){
        newTail = newTail.next;
    }
    let newHead = newTail.next;
    newTail.next = null;
    return newHead;
};
