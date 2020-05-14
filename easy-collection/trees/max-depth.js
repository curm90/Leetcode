// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/555/

const maxDepth = (root) => {
  if (!root) return 0;

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  return Math.max(left, right) + 1;
};
