const LinkedLists = require('../../scripts/01-Linear-DS/linked-lists')

describe('LinkedLists', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedLists(10);
  });

  it('should create a linked list with head and tail', () => {
    expect(linkedList.head.value).toEqual(10);
    expect(linkedList.tail.value).toEqual(10);
    expect(linkedList.length).toEqual(1);
  });

  describe('append()', () => {
    it('should append a new node to the end of the list', () => {
      linkedList.append(5);
      expect(linkedList.tail.value).toEqual(5);
      expect(linkedList.length).toEqual(2);
    });

    it('should return the linked list', () => {
      expect(linkedList.append(5)).toEqual(linkedList);
    });
  });

  describe('prepend()', () => {
    it('should prepend a new node to the start of the list', () => {
      linkedList.prepend(20);
      expect(linkedList.head.value).toEqual(20);
      expect(linkedList.length).toEqual(2);
    });

    it('should return the linked list', () => {
      expect(linkedList.prepend(20)).toEqual(linkedList);
    });
  });

  describe('insert()', () => {
    it('should insert a new node at the specified index', () => {
      linkedList.append(5).append(16);
      linkedList.insert(2, 99);
      expect(linkedList.printList()).toEqual([10, 5, 99, 16]);
      expect(linkedList.length).toEqual(4);
    });

    it('should append a new node if index is out of range', () => {
      linkedList.insert(20, 88);
      expect(linkedList.tail.value).toEqual(88);
      expect(linkedList.length).toEqual(2);
    });

    it('should return the linked list', () => {
      expect(linkedList.insert(2, 99)).toEqual(linkedList);
    });
  });

  describe('remove()', () => {
    it('should remove the node at the specified index', () => {
      linkedList.append(5).append(16);
      linkedList.remove(1);
      expect(linkedList.printList()).toEqual([10, 16]);
      expect(linkedList.length).toEqual(2);
    });

    it('should return the linked list', () => {
        expect(linkedList.remove(1)).toEqual(linkedList.printList());
    });
  });

  describe('reverse()', () => {
    it('should reverse the linked list', () => {
      linkedList.append(5).append(16).prepend(20);
      linkedList.reverse();
      expect(linkedList.printList()).toEqual([16, 5, 10, 20]);
    });

    it('should return the reversed linked list', () => {
        linkedList.append(5).append(16).prepend(20);
        expect(linkedList.reverse()).toEqual([16, 5, 10, 20]);
    });

    it('should return the original linked list if it only contains one node', () => {
      expect(linkedList.reverse()).toEqual([10]);
    });
  });
});
