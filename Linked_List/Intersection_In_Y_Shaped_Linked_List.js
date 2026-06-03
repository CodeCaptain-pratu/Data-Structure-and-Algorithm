/**
 * @param {Node} head1
 * @param {Node} head2
 * @returns {Node}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/
class Solution {
    intersectPoint(head1, head2) {
        //  code here
        if(!head1 || !head2){
            return null;
        }
        let temp1=head1;
        let temp2=head2;
        while(temp1!==temp2){
            temp1=temp1.next;
            temp2=temp2.next;
            if(temp1===temp2){
                return temp1;
            }
            if(!temp1){
                temp1=head2;
            }
            if(!temp2){
                temp2=head1;
            }
        }
        return temp1;
    }
}
