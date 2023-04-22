const Stack = require('../../scripts/01-Linear-DS/stacks');

describe('Stack', () => {
  let myStack;

  beforeEach(() => {
    myStack = new Stack();
  });

  test('push should add an element to the top of the stack', () => {
    myStack.push(1);
    expect(myStack.peek()).toBe(1);
    myStack.push(2);
    expect(myStack.peek()).toBe(2);
  });

  test('pop should remove the element at the top of the stack', () => {
    myStack.push(1);
    myStack.push(2);
    myStack.pop();
    expect(myStack.peek()).toBe(1);
    myStack.pop();
    expect(myStack.peek()).toBe(undefined);
  });

  test('peek should return the element at the top of the stack', () => {
    expect(myStack.peek()).toBe(undefined);
    myStack.push(1);
    expect(myStack.peek()).toBe(1);
    myStack.push(2);
    expect(myStack.peek()).toBe(2);
    myStack.pop();
    expect(myStack.peek()).toBe(1);
  });
});
