/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    if(!head.next) {
        return true;
    }
    
    let stack = []
    
    let temp = head
    
    while(head) {
        stack.push(head.val)
        head = head.next
    }
    
    head = temp
    
    while(head) {
        let popped = stack.pop();
        if(popped != head.val) {
            return false
        } else {
            head = head.next
        }
    }
    
    
    return true;
};