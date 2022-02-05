class Stack {
  constructor(size = 10) {
    this.storage = new Array(size);
    this.pointer = 0;
    this.size = size;
  }

  push(item) {
    if (this.isFull()) {
      this.size = this.size * 2;
      const temp = new Array(this.size);

      for (let i = 0; i < this.pointer; i++) {
        temp[i] = this.storage[i];
      }

      this.storage = temp;
    }

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

  isFull() {
    return this.pointer === this.size;
  }
}

module.exports = Stack;
