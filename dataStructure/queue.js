class Queue {
  constructor() {
    this.storage = [];
    this.front = 0;
    this.back = 0;
  }

  enqueue(item) {
    this.storage[this.back] = item;
    this.back++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const removedItem = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;

    return removedItem;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.storage[this.back - 1];
  }

  isEmpty() {
    return this.back === 0;
  }
}

module.exports = Queue;
