// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/773/

const hasCycle = (head) => {
  // if no head or no head.next return false
  if (head === null || head.next === null) {
    return false;
  }

  // place to store slow and fast pointers
  let slow = head;
  let fast = head.next;

  // while fast pointer does not equal slow pointer
  while (fast !== slow) {
    // if fast pointer or fast.next is null return false
    if (fast === null || fast.next === null) {
      return false;
    }

    // increment slow by one
    slow = slow.next;
    // increment fast by two
    fast = fast.next.next;
  }

  // if we make it here we know its a cycle and can return true
  return true;
};
