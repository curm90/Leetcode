// https://leetcode.com/explore/learn/card/queue-stack/228/first-in-first-out-data-structure/1337/

/**
 * @param {number} k
 */
function MyCircularQueue(k) {
  this.queue = new Array(k);
  this.size = k;
  this.head = -1;
  this.tail = -1;
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;

  if (this.isEmpty()) {
    this.head = 0;
  }

  this.tail = (this.tail + 1) % this.size;
  this.queue[this.tail] = value;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false;

  if (this.head === this.tail) {
    this.head = -1;
    this.tail = -1;
  } else {
    this.head = (this.head + 1) % this.size;
  }

  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.queue[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.queue[this.tail];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.head === -1 && this.tail === -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return (this.tail + 1) % this.size === this.head;
};

// Your MyCircularQueue object will be instantiated and called as such:
const circularQueue = new MyCircularQueue(3);
console.log(circularQueue.enQueue(1)); // true
console.log(circularQueue.enQueue(2)); // true
console.log(circularQueue.enQueue(3)); // true
console.log(circularQueue.enQueue(4)); // false (queue is full)
console.log(circularQueue.Front()); // 1
console.log(circularQueue.Rear()); // 3
console.log(circularQueue.deQueue()); // true
console.log(circularQueue.enQueue(4)); // true
console.log(circularQueue.Rear()); // 4
console.log(circularQueue.Front()); // 2
