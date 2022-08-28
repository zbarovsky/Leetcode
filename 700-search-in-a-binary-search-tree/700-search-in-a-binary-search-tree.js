/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    
    if(root === val) {
        return root
    }
    
    let curNode = root
    let queue = []
    
    queue.push(curNode)
    
    while(queue.length > 0) {
        curNode = queue.shift();
        if(curNode.val === val) {
            return curNode
        }
        
        if(curNode.left) {
            queue.push(curNode.left)
        }
        
        if(curNode.right) {
            queue.push(curNode.right)
        }
    }
    
    return null
    
};