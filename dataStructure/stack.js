class Stack {
  constructor() {
    this.storage = [];
    this.pointer = 0;
  }

  push(item) {
    this.storage[this.pointer] = item;
    this.pointer++;
    return item;
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }

    this.pointer--;
    const item = this.storage[this.pointer];
    delete this.storage[this.pointer];

    return item;
  }

  isEmpty() {
    return this.pointer === 0;
  }
}

module.exports = Stack;
