// Linear Data Structure - Stacks --> O(1)
// Stacks are a collection of items that are added and removed in a Last In First Out (LIFO) order.

class Stack {
    constructor() {
        this.array = [];
    }

    peek() { // Return the last item in the stack
        return this.array[this.array.length - 1]; // O(1)
    }

    push(value) { // Add an item to the stack
        this.array.push(value); // O(1)
        return this; // Return the stack
    }

    pop() { // Remove an item from the stack
        this.array.pop(); // O(1)
        return this;
    }
}

const myStack = new Stack();
myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();

module.exports = Stack;