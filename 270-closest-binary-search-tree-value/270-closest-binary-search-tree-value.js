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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let closest = root.val - target;
    let closestVal;
    let queue = []
    let node = root
    
    queue.push(node)
    
    while(queue.length > 0) {
        node = queue.shift()
        let curVal = node.val - target
        
        if(curVal === 0) {
            return node.val
        } else if (curVal > 0 && curVal <= Math.abs(closest)) {
            closest = curVal
            closestVal = node.val
        } else if (curVal < 0 && -curVal <= Math.abs(closest)) {
            closest = curVal
            closestVal = node.val
        }
        
        if(node.left) {
            queue.push(node.left)
        } 
        
        if (node.right) {
            queue.push(node.right)
        }
    }
    
    return closestVal
    
};