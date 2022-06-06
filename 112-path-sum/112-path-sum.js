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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) {
        return false
    }
    
    return traverse(root, 0, targetSum)
    
};

function traverse(root, sum, target) {
    if(!root) {
        return false
    }
    
    if(!root.left && !root.right) {
        return sum + root.val == target;
    }
    
    sum += root.val
    
    return traverse(root.left, sum, target) || traverse(root.right, sum, target)

}