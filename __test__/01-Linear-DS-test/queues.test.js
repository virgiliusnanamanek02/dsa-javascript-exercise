const Queues = require('../../scripts/01-Linear-DS/queues');

describe('Queues', () => {
  let myQueue;

  beforeEach(() => {
    myQueue = new Queues();
  });

  test('should add an element to the end of the queue', () => {
    myQueue.enqueue(1);
    expect(myQueue.peek()).toBe(1);
    myQueue.enqueue(2);
    expect(myQueue.peek()).toBe(1);
  });

  test('should remove the element at the front of the queue', () => {
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.dequeue();
    expect(myQueue.peek()).toBe(2);
    myQueue.dequeue();
    expect(myQueue.peek()).toBe(undefined);
  });

  test('should return the element at the front of the queue', () => {
    expect(myQueue.peek()).toBe(undefined);
    myQueue.enqueue(1);
    expect(myQueue.peek()).toBe(1);
    myQueue.enqueue(2);
    expect(myQueue.peek()).toBe(1);
    myQueue.dequeue();
    expect(myQueue.peek()).toBe(2);
  });
});
