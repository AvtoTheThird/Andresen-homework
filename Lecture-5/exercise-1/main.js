// linked list
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  addLast(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }
  addFirst(data) {
    let newNode = new Node(data);

    newNode.next = this.head;

    this.head = newNode;
  }

  delete(data) {
    if (this.head === null) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      if (current.next.data == data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  removeFirst() {
    if (this.head === null) {
      throw new Error("linked list is empty");
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (this.head === null) {
      throw new Error("linked list is empty");
    }

    if (this.head.next === null) {
      this.head = null;
      return;
    }

    let current = this.head;

    while (current.next.next !== null) {
      current = current.next;
    }

    current.next = null;
  }

  clear() {
    this.head = null;
  }

  search(data) {
    if (this.head === null) {
      return;
    }
    if (this.head.data === data) {
      return true;
    }

    let current = this.head;

    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  toArray() {
    let current = this.head;

    let elements = [];

    while (current !== null) {
      elements.push(current.data);
      current = current.next;
    }

    return elements;
  }
}
