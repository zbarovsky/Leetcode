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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if(!root) {
        return []
    }
    
    return traverse(root, [])
};

function traverse(node, list) {
    if(node.left) {
        traverse(node.left, list)
    }
    
    if(node.right) {
        traverse(node.right, list)
    }
    
    list.push(node.val)
    
    return list
}