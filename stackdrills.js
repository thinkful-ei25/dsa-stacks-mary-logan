'use strict';
const Stack = require('./stack');

function peek(stack) {
  console.log(stack.top);
}
function display(stack) {
  console.log(JSON.stringify(stack));
}

const starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');
starTrek.pop();
starTrek.pop();
peek(starTrek);
display(starTrek);

