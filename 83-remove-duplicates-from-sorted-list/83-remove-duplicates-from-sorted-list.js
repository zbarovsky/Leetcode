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
var deleteDuplicates = function(head) {
    
    let curNode = head
    
    while(curNode !== null && curNode.next !== null) {
        let nextNode = curNode.next
        
        if(curNode.val == nextNode.val) {
            curNode.next = nextNode.next
        } else {
            curNode = curNode.next
        }
        
    }
    
    return head
};