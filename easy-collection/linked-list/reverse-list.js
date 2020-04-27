// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/560/

const reverseList = (head) => {
  // place to store the prev node
  let prev = null;
  // place to store the current node
  let curr = head;
  // iterate over list
  while (curr !== null) {
    // place to store the currents next value
    let next = curr.next;
    // set curr.next to prev
    curr.next = prev;
    // set prev to curr
    prev = curr;
    // set curr to currents next
    curr = next;
  }
  // return prev
  return prev;
};

const reverseList = (head) => {
  if (head === null || head.next === null) return head;

  const list = reverseList(head.next);

  head.next.next = head;
  head.next = null;
  return list;
};
