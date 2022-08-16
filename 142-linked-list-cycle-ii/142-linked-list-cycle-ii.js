/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    
    let cache = new Set();
    let index = 0;
    
    while(head) {
        
        if(cache.has(head)) {
            return head
        } else {
            cache.add(head)
        }
        
        head = head.next
        index++
    }
    return null;
    
    
    
};