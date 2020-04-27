// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/603/

const removeNthFromEnd = (head, n) => {
  let dummy = new ListNode(0);
  dummy.next = head;
  let length = 0;
  let start = head;

  while (start) {
    length++;
    start = start.next;
  }

  length -= n;
  start = dummy;
  while (length > 0) {
    length--;
    start = start.next;
  }

  start.next = start.next.next;
  return dummy.next;
};

const removeNthFromEnd = (head, n) => {
  let dummy = new ListNode(0);
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  for (let i = 1; i <= n + 1; i++) {
    fast = fast.next;
  }

  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
};
