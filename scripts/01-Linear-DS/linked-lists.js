// Linear Data Structure - Linked Lists --> O(n)
// Linked Lists are a collection of items where every item has a pointer to the next item in the list.
// 

class LinkedLists {
	constructor(value) {
		this.head = {
			value,
			next: null,
		};
		this.tail = this.head; // The tail is the head
		this.length = 1;
	}

	append(value) {
		const newNode = {
			value,
			next: null,
		};
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value) {
		const newNode = {
			value,
			next: null,
		};
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}

	insert(index, value) {
		if (index >= this.length) {
			return this.append(value);
		}

		const newNode = {
			value,
			next: null,
		};
		const leader = this.traverseToIndex(index - 1);
		if (!leader) {
			return this.append(value);
		}
		const holdingPointer = leader.next;
		leader.next = newNode;
		newNode.next = holdingPointer;
		this.length++;
		return this.printList();
	}

	traverseToIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index && currentNode !== null) {
			currentNode = currentNode.next;
			counter++;
		}

		return currentNode;
	}

	remove(index) {
		if (index >= this.length) {
			return this.printList();
		}

		const leader = this.traverseToIndex(index - 1);
		if (!leader) {
			return this.printList();
		}
		const unwantedNode = leader.next;
		if (!unwantedNode) {
			return this.printList();
		}
		leader.next = unwantedNode.next;
		this.length--;
		return this.printList();
	}

	printList() {
		const array = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}

		return array;
	}

	reverse() {
		if (!this.head.next) {
			return [this.head.value];
		}

		let first = this.head;
		this.tail = this.head;
		let second = first.next;
		while (second) {
			const temporary = second.next;
			second.next = first;
			first = second;
			second = temporary;
		}

		this.head.next = null;
		this.head = first;
		return this.printList();
	}
}
	


const myLinkedList = new LinkedLists(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(2);
myLinkedList.reverse();


module.exports = LinkedLists;