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
var middleNode = function(head) {
    let counter = 0;
    let middle = 0;
    
    let temp = head;
    
    while(temp) {
        temp = temp.next
        counter++
    }
    
    if(counter % 2 != 0) {
        middle = Math.floor(counter / 2)
    } else {
        middle = Math.ceil(counter / 2)
    }
    
    counter = 0;
    
    while(counter < middle) {
        head = head.next
        counter++
    }
    
    return head
    
};