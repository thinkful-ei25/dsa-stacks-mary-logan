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

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  // your code goes here
}

// true, true, true
console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));