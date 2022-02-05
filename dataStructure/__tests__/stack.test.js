const Stack = require("../stack");

describe("stack", () => {
  describe("push", () => {
    it("요소를 스택에 넣습니다. ", () => {
      const stack = new Stack();
      const item = 1;
      expect(stack.push(item)).toEqual(item);
    });

    it("초기 크기를 초과해서 데이터를 넣을 때, 새로운 배열을 생성합니다.", () => {
      const stack = new Stack(2);
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.size).toEqual(4);
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
    it("stack 이 비어있는지 확인한다.", () => {
      const stack = new Stack();
      stack.push(1);
      stack.pop();

      expect(stack.isEmpty()).toBe(true);
    });
  });
});
