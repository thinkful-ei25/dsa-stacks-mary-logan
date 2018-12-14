'use strict';
const _Node = require('./node');

class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    if (this.top === null) {
      this.top = new _Node(value, null);
      return this.top;
    }
    const node = new _Node(value, this.top);
    this.top = node;
  }
  pop() {
    const topNode = this.top;
    this.top = topNode.next;
    return topNode.data;
  }
}

module.exports = Stack;