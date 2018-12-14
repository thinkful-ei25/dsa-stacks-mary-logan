'use strict';
const Queue = require('./queue');

function peek(queue) {
  if (!queue.first) {
    return null;
  }
  return queue.first.data;
}

function display(queue) {
  let currentNode = queue.first;
  while (currentNode !== null && currentNode !== undefined) {
    console.log(currentNode.data);
    currentNode = currentNode.prev;
  }
}
const starTrekQ = new Queue();
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('McCoy');
starTrekQ.enqueue('Scotty');
starTrekQ.enqueue('Sulu');
starTrekQ.dequeue();
starTrekQ.dequeue();
display(starTrekQ);
// console.log(starTrekQ);
// console.log(peek(starTrekQ));
