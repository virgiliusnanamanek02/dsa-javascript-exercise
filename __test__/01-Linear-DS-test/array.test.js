const MyArray = require('../../scripts/01-Linear-DS/arrays')

describe('MyArray', () => {
  let newArray;
  beforeEach(() => {
    newArray = new MyArray();
  });

  it('can push items', () => {
    expect(newArray.push('hi')).toBe(1);
    expect(newArray.push('you')).toBe(2);
  });

  it('can get items by index', () => {
    newArray.push('hi');
    newArray.push('you');
    expect(newArray.get(0)).toBe('hi');
    expect(newArray.get(1)).toBe('you');
  });

  it('can pop items', () => {
    newArray.push('hi');
    newArray.push('you');
    newArray.push('!');
    expect(newArray.pop()).toBe('!');
    expect(newArray.length).toBe(2);
  });

  it('can delete items by index', () => {
    newArray.push('hi');
    newArray.push('you');
    newArray.push('!');
    newArray.delete(1);
    expect(newArray.length).toBe(2);
    expect(newArray.get(0)).toBe('hi');
    expect(newArray.get(1)).toBe('!');
  });
});
