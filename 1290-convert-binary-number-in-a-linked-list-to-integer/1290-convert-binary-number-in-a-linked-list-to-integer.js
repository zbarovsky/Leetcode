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
var getDecimalValue = function(head) {
    let num = ""
    let output;
    
    while(head) {
        let stringify = head.val.toString();
        num += stringify;
        head = head.next
    }
    
    output = parseInt(num, 2) 
    
    return output
};