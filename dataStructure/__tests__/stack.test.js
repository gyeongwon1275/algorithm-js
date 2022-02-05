const Stack = require("../stack");

describe("stack", () => {
  describe("push", () => {
    it("요소를 스택에 넣습니다. ", () => {
      const stack = new Stack();
      const item = 1;
      expect(stack.push(item)).toEqual(item);
    });
  });

  describe("pop", () => {
    it("stack의 맨위의 있는 요소를 제거하여 리턴한다.", () => {
      const stack = new Stack();
      stack.push(1);

      expect(stack.pop()).toEqual(1);
      expect(stack.pointer).toEqual(0);
      expect(stack.pop()).toBeUndefined();
    });
  });

  describe("isEmpty", () => {
    it("stack의 맨위의 있는 요소를 제거하여 리턴한다.", () => {
      const stack = new Stack();
      stack.push(1);
      stack.pop();

      expect(stack.isEmpty()).toBe(true);
    });
  });
});
