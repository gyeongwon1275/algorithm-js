class Queue {
  constructor() {
    this.storage = [];
    this.front = 0;
    this.back = 0;
    this.length = 0;
  }

  enqueue(item) {
    this.storage[this.back] = item;
    this.back++;
    this.length++;
  }

  dequeue() {
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

module.exports = Queue;
