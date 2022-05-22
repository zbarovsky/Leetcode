/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    
    // 1. First, we swap the first two nodes in the list, i.e. head and head.next;
    // 2. Then, we call the function self as swap(head.next.next) to swap the rest of the list following the first two nodes.
    // 3. Finally, we attach the returned head of the sub-list in step (2) with the two nodes swapped in step (1) to form a new linked list.
    
    // base case
    if(head == null || head.next == null) {
        return head;
    }
    
    // swap pairs
    let firstNode = head;
    let secondNode = head.next;
    
    // recurse
    firstNode.next = swapPairs(secondNode.next);
    secondNode.next = firstNode;
    
    return secondNode;
};