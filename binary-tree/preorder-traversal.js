// https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/928/

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

function preorderTraversal(root) {
  // if thre is no root return an empty array
  if (!root) return [];
  // place to store a stack initialized with root
  const stack = [root];
  // place to store the result array
  const result = [];

  // while stack is not empty
  while (stack.length > 0) {
    // place to store the current node popped off the stack
    let node = stack.pop();

    // add that nodes value to the result array
    result.push(node.val);

    // if current nodes right node is not null - push to the stack
    if (node.right) {
      stack.push(node.right);
    }

    // if current nodes left node is not null - push to the stack
    if (node.left) {
      stack.push(node.left);
    }
  }

  // return result array
  return result;
}

function preorderTraversal(root) {
  const stack = [root];
  let result = [];

  if (temp == null) continue;

  while (stack.length > 0) {
    let temp = stack.pop();

    result.push(temp.val);

    stack.push(temp.right);
    stack.push(temp.left);
  }

  return result;
}

function preorderTraversal(root) {
  if (!root) return [];

  return [
    root.val,
    ...preorderTraversal(root.left),
    ...preorderTraversal(root.right),
  ];
}
