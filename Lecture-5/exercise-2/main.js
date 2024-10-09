class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor(maxSize = 10) {
    this.top = null;
    this.maxSize = maxSize;
    this.size = 0;
  }

  push(data) {
    if (this.size === this.maxSize) {
      throw new Error('stack is full');
    }

    const newNode = new Node(data);

    if (!this.top) {
      this.top = newNode;
    }
    
    else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
  }

  pop() {
    if (this.top === null) {
      throw new Error('stack is empty');
    }
    this.top = this.top.next;
    this.size--;
  }

  peek() {
    if (this.top === null) {
      return null;
    }

    return this.top.data;
  }

  isEmpty() {
    return Boolean(this.size);
  }

  toArray() {
    let current = this.top;

    let elements = [];

    while (current !== null) {
      elements.push(current.data);
      current = current.next;
    }

    return elements;
  }

  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('passed entity is not iterable');
    }

    let stack = new Stack(iterable.length);

    for (let item of iterable) {
      stack.push(item);
    }

    return stack;
  }
}
