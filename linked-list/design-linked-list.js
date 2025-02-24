// https://leetcode.com/explore/learn/card/linked-list/209/singly-linked-list/1290/

function Node(val) {
  this.val = val;
  this.next = null;
}

const MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  console.log(this.size, index);

  if (this.size > 0 && index >= 0 && index <= this.size - 1) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.val;
  }
  return -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
  this.size += 1;
  return this;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }

  this.size += 1;
  return this;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  const newNode = new Node(val);

  if (index > this.size) return;
  if (index === this.size) {
    return this.addAtTail(val);
  }
  if (index <= 0) {
    return this.addAtHead(val);
  }

  let currentNode = this.head;
  for (let i = 0; i < index - 1; i++) {
    currentNode = currentNode.next;
  }

  newNode.next = currentNode.next ? currentNode.next : null;
  currentNode.next = newNode;
  this.size += 1;
  return this;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.size || index < 0) return;
  if (index === 0) {
    this.head = this.head.next;
    this.size -= 1;
    return this;
  }

  let currentNode = this.head;
  for (let i = 0; i < index - 1; i++) {
    currentNode = currentNode.next;
  }

  currentNode.next = currentNode.next.next ? currentNode.next.next : null;
  if (!currentNode.next) {
    this.tail = currentNode;
  }

  this.size -= 1;
  return this;
};

//  Your MyLinkedList object will be instantiated and called as such:
const obj = new MyLinkedList();
console.log(obj.addAtHead(1));
console.log(obj.get(0));
console.log(obj.addAtTail(3));
console.log(obj.addAtIndex(1, 2));
console.log(obj.deleteAtIndex(1));
