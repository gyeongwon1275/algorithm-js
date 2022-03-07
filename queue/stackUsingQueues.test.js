const MyStack = require("./stackUsingQueues");

describe("stackUsingQueues", () => {
  it("Pushes element x to the top of the stack.", () => {
    const stack = new MyStack();
    stack.push(1);
    stack.push(2);
    console.log(stack);
    expect(stack.top()).toBe(2);

    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.empty()).toBe(true);
  });
});
