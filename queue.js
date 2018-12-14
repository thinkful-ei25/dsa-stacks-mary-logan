'use strict';
class _Node {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}
//First in first out
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    //create a node with the data that you want to add to the queue
    const node = new _Node(value);
    //if the queue is empty, 
    //make the node the first node on the queue
    if (this.first === null) {
      this.first = node;
    }
    //if there is something on the queue already
    //then take the node that is currently at the end of the queue
    //and link it to the new node
    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    //check if empty
    if (this.first === null) {
      return;
    }
    //remove first in line
    const node = this.first;
    this.first = node.prev;
    //check if node is last in line
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}
module.exports = Queue;