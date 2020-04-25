// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/553/

const deleteNode = (node) => {
  // set the node we want to delete value equal to the next nodes value
  node.val = node.next.val;
  // then we need to set the nodes next value equal to the next node after the next node (2 nodes after)
  node.next = node.next.next;
};
