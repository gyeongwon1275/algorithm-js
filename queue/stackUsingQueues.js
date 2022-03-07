class MyQueue {
  constructor() {
    this.storage = [];
    this.front = 0;
    this.back = 0;
    this.length = 0;
  }

  push(item) {
    this.storage[this.back] = item;
    this.back++;
    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;

    this.length--;
    return item;
  }
  peek() {
    return this.storage[this.front];
  }

  isEmpty() {
    return this.length === 0;
  }
}

function MyStack() {
  this.queue = new MyQueue();
  this.tempQueue = new MyQueue();
}

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  if (this.queue.isEmpty()) {
    this.queue.push(x);
    return;
  }

  while (!this.queue.isEmpty()) {
    this.tempQueue.push(this.queue.pop());
  }

  this.queue.push(x);

  while (!this.tempQueue.isEmpty()) {
    this.queue.push(this.tempQueue.pop());
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.queue.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue.peek();
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.isEmpty();
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

module.exports = MyStack;
