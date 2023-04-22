// Linear Data Structure - Queues --> O(1)
// Queues are a collection of items that are added and removed in a First In First Out (FIFO) order.

class Queue {
    constructor() {
        this.array = [];
    }

    peek() { // Return the first item in the queue
        return this.array[0]; // O(1)
    }

    enqueue(value) { // Add an item to the queue
        this.array.push(value); // O(1)
        return this; // Return the queue
    }

    dequeue() { // Remove an item from the queue
        this.array.shift(); // O(n)
        return this;
    }
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

module.exports = Queue;