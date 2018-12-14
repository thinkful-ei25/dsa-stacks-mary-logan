'use strict';
const Stack = require('./stack');

function peek(stack) {
  if (!stack.top) {
    return null;
  }
  return stack.top;
}
function display(stack) {
  console.log(JSON.stringify(stack));
}

// const starTrek = new Stack();
// starTrek.push('Kirk');
// starTrek.push('Spock');
// starTrek.push('McCoy');
// starTrek.push('Scotty');
// starTrek.pop();
// starTrek.pop();
// peek(starTrek);
// display(starTrek);

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const stack1 = new Stack;
  for (let i = 0; i < s.length; i++) {
    stack1.push(s[i]);
  }
  // for (let i = s.length - 1; i >= 0; i--) {
  for (let i = 0; i < s.length; i++) {
    let topOftheStack = stack1.pop();
    if (topOftheStack !== s[i]) {
      return false;
    }
  }
  return true;
}

// true, true, true
// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));
// console.log(is_palindrome('123'));

//Matching parentheses in an expression
/*
  s = ()
  loop through string, if open ( push to stack
  if we see ) remove (
  check if ( leftover in stack, to see if even or uneven
*/
function matchParantheses(s) {
  const paranthesesStack = new Stack();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      paranthesesStack.push(i); //pushes in the index
      //console.log(paranthesesStack);
    }
    if (s[i] === ')') {
      if (paranthesesStack.top === null) {
        return `) at ${i}: Doesn't have an opening bracket `;
      }
      paranthesesStack.pop();
    }
  }

  if (paranthesesStack.top !== null) {
    return `Paranthesis at ${paranthesesStack.top.data} is not closed`;
  }

  return 'Valid';
}

// console.log(matchParantheses('(())'));
// console.log(matchParantheses('(()'));
// console.log(matchParantheses('())'));