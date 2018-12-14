'use strict';
const Stack = require('./stack');

// enqueue adds to end of queue
// dequeue removes from start of queue
// first stack: first to last
// last stack: last to first
class Queue {
  constructor() {
    this.first = new Stack();
    this.last = new Stack();
  }

  enqueue(value) {
    this.last.push(value);
    let currentNode = this.last.top;
    while (currentNode !== null) {
      this.first.push(currentNode.data);
      currentNode = currentNode.next;
    }
  }
  // stack 1 1->2->3 stack 2 1<-2<-3 
  dequeue() {
    while (this.first.top !== null) {
      this.last.push(this.top.pop());
    }
    return this.last.pop();
  }
}

function testStackQueue() {
  const stack = new Queue();
  stack.enqueue(1);
  stack.enqueue(2);
  stack.enqueue(3);
  console.log(JSON.stringify(stack));


}
testStackQueue();