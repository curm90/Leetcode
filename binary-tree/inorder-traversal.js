// https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/929/

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

function inorderTraversal(root) {
  // place to store the stack
  const stack = [];
  // place to store the result array
  const result = [];
  // place to store the current node
  let current = root;

  // iterate while the stack is not empty or the current node is not null
  while (stack.length > 0 || current != null) {
    // iterate while the current node is not null
    while (current != null) {
      // push current node to the stack
      stack.push(current);
      // set current node to current nodes left
      current = current.left;
    }

    // pop item off stack and set to current node
    current = stack.pop();
    // add current nodes value to result arr
    result.push(current.val);
    // set current node to current nodes right
    current = current.right;
  }

  // return result arr
  return result;
}

function inorderTraversal(root) {
  const result = [];

  function traverse(root) {
    if (root.left) traverse(root.left);
    result.push(root.val);
    if (root.right) traverse(root.right);
  }

  traverse(root);
  return result;
}

function inorderTraversal(root) {
  if (!root) return [];

  return [
    ...inorderTraversal(root.left),
    root.val,
    ...inorderTraversal(root.right),
  ];
}
