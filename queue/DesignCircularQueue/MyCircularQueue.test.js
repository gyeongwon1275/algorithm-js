const MyCircularQueue = require("./MyCircularQueue");

describe("DesignCircularQueue", () => {
  it("queue 구현 ", () => {
    const myCircularQueue = new MyCircularQueue(3);
    expect(myCircularQueue.enQueue(7)).toBe(true);
    expect(myCircularQueue.deQueue()).toBe(true);
    expect(myCircularQueue.Front()).toBe(-1);
    expect(myCircularQueue.deQueue()).toBe(false);
    expect(myCircularQueue.Front()).toBe(-1);
    expect(myCircularQueue.Rear()).toBe(-1);
    expect(myCircularQueue.enQueue(0)).toBe(true);
    expect(myCircularQueue.isFull(0)).toBe(false);
    expect(myCircularQueue.deQueue()).toBe(true);
    expect(myCircularQueue.Rear(0)).toBe(-1);
    expect(myCircularQueue.enQueue(3)).toBe(true);
  });

  it("queue 구현 ", () => {
    const myCircularQueue = new MyCircularQueue(8);
    expect(myCircularQueue.enQueue(3)).toBe(true);
    expect(myCircularQueue.enQueue(9)).toBe(true);
    expect(myCircularQueue.enQueue(5)).toBe(true);
    expect(myCircularQueue.enQueue(0)).toBe(true);
    expect(myCircularQueue.deQueue()).toBe(true);
    expect(myCircularQueue.deQueue()).toBe(true);
    expect(myCircularQueue.isEmpty()).toBe(false);
    expect(myCircularQueue.isEmpty()).toBe(false);
    expect(myCircularQueue.Rear()).toBe(0);
    expect(myCircularQueue.Rear()).toBe(0);
    expect(myCircularQueue.deQueue()).toBe(true);
  });

  it("queue 구현 ", () => {
    const myCircularQueue = new MyCircularQueue(3);
    expect(myCircularQueue.enQueue(1)).toBe(true);
    expect(myCircularQueue.enQueue(2)).toBe(true);
    expect(myCircularQueue.enQueue(3)).toBe(true);
    expect(myCircularQueue.enQueue(4)).toBe(false);
    expect(myCircularQueue.Rear()).toBe(3);
    expect(myCircularQueue.isFull()).toBe(true);
    expect(myCircularQueue.deQueue()).toBe(true);
    expect(myCircularQueue.enQueue(4)).toBe(true);
    expect(myCircularQueue.Rear()).toBe(4);
  });

  it("queue 구현 ", () => {
    const myCircularQueue = new MyCircularQueue(3);
    expect(myCircularQueue.enQueue(7)).toBe(true);
    expect(myCircularQueue.deQueue()).toBe(true);
    expect(myCircularQueue.Front()).toBe(-1);
    expect(myCircularQueue.deQueue()).toBe(false);
    expect(myCircularQueue.Front()).toBe(-1);
    expect(myCircularQueue.Rear()).toBe(-1);
    expect(myCircularQueue.enQueue(0)).toBe(true);
    expect(myCircularQueue.isFull()).toBe(false);
    expect(myCircularQueue.deQueue()).toBe(true);
    expect(myCircularQueue.Rear()).toBe(-1);
    expect(myCircularQueue.enQueue(3)).toBe(true);
    expect(myCircularQueue.Front()).toBe(3);
    expect(myCircularQueue.Rear()).toBe(3);
  });
});
