/**
 * We will want to use the tourtise and har algorithm
 * to find the middle node of a linked list.
 * The slow pointer will move one step at a time, 
 * while the fast pointer will move two steps at a time.
 */

class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class LinkedList {
  constructor(value) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
  }

  printList() {
      let temp = this.head;
      while (temp !== null) {
          console.log(temp.value);
          temp = temp.next;
      }
  }

  getHead() {
      if (this.head === null) {
          console.log("Head: null");
      } else {
          console.log("Head: " + this.head.value);
      }
  }

  getTail() {
      if (this.tail === null) {
          console.log("Tail: null");
      } else {
          console.log("Tail: " + this.tail.value);
      }
  }

  makeEmpty() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  push(value) {
      const newNode = new Node(value);
      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
      }
  }
  
  findMiddleNode() {
    // initialize the slow and fast pointers at the head
    let a = this.head;
    let b = this.head;
    
    // Iterate through the list
    while (b !== null && b.next !== null) {
      // Move the slow pointer one step
      a = a.next;
      // Move the fast pointer two steps
      b = b.next.next;
    }
    // Return middle when fast pointer reaches the end of the list
    return a;
  }
}