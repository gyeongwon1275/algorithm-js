const MyQueue = require("./ImplementQueueusingStacks");

describe("ImplementQueueusingStacks", () => {
  it("stack 사용하여 queue 구현", () => {
    const myQueue = new MyQueue();
    myQueue.push(1); // queue is: [1]
    myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)

    expect(myQueue.peek()).toEqual(1);

    expect(myQueue.pop()).toEqual(1);
    expect(myQueue.pop()).toEqual(2);
  });
});
