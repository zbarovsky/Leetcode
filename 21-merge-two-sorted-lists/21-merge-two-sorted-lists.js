/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    if(!list1 && !list2) {
        return list1;
    }
    
    let prehead = new ListNode(-1)
    let prev = prehead
   
    while(list1 && list2) {
        if(list1.val <= list2.val) {
            prev.next = list1
            list1 = list1.next
        } else {
            prev.next = list2
            list2 = list2.next
        }
        
        prev = prev.next
    }
    
    if(list1 !== null) {
        prev.next = list1
    } else {
        prev.next = list2
    }
    
    return prehead.next
    
    
};