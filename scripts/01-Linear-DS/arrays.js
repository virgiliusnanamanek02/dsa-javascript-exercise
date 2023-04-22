// Linear Data Structure - Arrays
// Arrays are a collection of items where every item has an index associated with it.

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) { // O(1)
        return this.data[index]
    }
    push(item) { // O(1)
        this.data[this.length] = item; // Assign the item to the index of the length
        this.length++; // Increment the length
        return this.length; // Return the length
    }
    pop() { // O(1)
        const lastItem = this.data[this.length -1]; // Get the last item
        delete this.data[this.length -1]; // Delete the last item
        this.length--; // Decrease the length
        return lastItem; // Return the last item
    }
    delete(index) { // O(n)
        const item = this.data[index]; // Get the item at the index
        this.shiftItems(index);
        return item;
    }
    shiftItems(index) { // O(n)
        for(let i = index; i < this.length -1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length -1];
        this.length--;
    }
}


const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.pop();
newArray.delete(0);
newArray.push('are');
newArray.push('nice');
newArray.delete(1);

module.exports = MyArray;
