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
var inorderTraversal = function(root) {
    if(!root) {
        return []
    }
    return traverse(root, []);
    
};

function traverse(root, list) {
    
    if(root.left) {
        traverse(root.left, list)
    }
    
    list.push(root.val);
    
    if (root.right) {
        traverse(root.right, list)
    }
    
    return list;
}