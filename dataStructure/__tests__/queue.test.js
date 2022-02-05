const Queue = require("../queue");

describe("queue", () => {
  describe("enqueue", () => {
    it("요소를 queue 에 넣습니다. ", () => {
      const queue = new Queue();
      const item = 1;
      queue.enqueue(item);

      expect(queue.peek()).toEqual(item);
    });
  });

  describe("dequeue", () => {
    it("요소를 queue 에서 제거합니다.", () => {
      const queue = new Queue();
      const item = 1;
      queue.enqueue(item);

      expect(queue.dequeue()).toEqual(item);
    });
  });
});
