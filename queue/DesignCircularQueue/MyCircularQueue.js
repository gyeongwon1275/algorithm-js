/**
 * @param {number} k
 */
const MyCircularQueue = function (k) {
  this.queue = {};
  this.front = 0;
  this.back = 0;
  this.size = k;
  this.remainSpace = k;

  for (let i = 0; i < k; i++) {
    this.queue[i] = null;
  }
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) {
    return false;
  }

  if (this.Rear() !== -1) {
    this.back = (this.back + 1) % this.size;
  }

  this.queue[this.back] = value;

  this.remainSpace--;

  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) {
    return false;
  }

  this.queue[this.front] = null;

  if (this.front !== this.back) {
    this.front = (this.front + 1) % this.size;
  }

  this.remainSpace++;

  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  const front = this.queue[this.front];
  return front === null ? -1 : front;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  const rear = this.queue[this.back];
  return rear === null ? -1 : rear;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.remainSpace === this.size;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.remainSpace === 0;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

module.exports = MyCircularQueue;
