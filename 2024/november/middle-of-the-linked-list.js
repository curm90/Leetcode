// https://leetcode.com/problems/middle-of-the-linked-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleNode(head) {
  // place to store the current node
  let current = head;
  // place to store the length of the linked list
  let length = 0;
  // place to store the current index
  let index = 0;
  // iterate over the linked list
  while (current) {
    // increment the length
    length += 1;
    current = current.next;
  }
  // iterate over the linked list again
  current = head;
  while (current) {
    // if math.floor of the length / 2 is less than or equal to the current index)
    if (Math.floor(length / 2) <= index) {
      // push the current node value into the result array
      return current;
    }
    current = current.next;
    index += 1;
  }
}

function middleNode(head) {
  let slowPoiner = head;
  let fastPointer = head;

  while (fastPointer && fastPointer.next) {
    slowPoiner = slowPoiner.next;
    fastPointer = fastPointer.next.next;
  }
  return slowPoiner;
}
