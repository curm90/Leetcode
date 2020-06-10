// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/772

const isPalindrome = (head) => {
  // place to store the list values
  const arr = [];
  // place to store the head pointer
  let node = head;

  // iterate over list until node is not null
  while (node !== null) {
    // add nodes value to temp array
    arr.push(node.val);
    // increment node pointer
    node = node.next;
  }

  // iterate over temp array until halfway point
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    // if current number does not equal number at the end of temp array - i - 1
    if (arr[i] !== arr[arr.length - i - 1]) {
      // return false
      return false;
    }
  }
  // if it makes it this far its a palindrome and can return true
  return true;
};
