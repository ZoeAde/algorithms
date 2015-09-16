//Return the string in reverse order
function reverseString(str) {
  return str.split('').reverse().join('');
}

//Return the factorial of the provided integer
function factorialize(num) {
  var factorial = 1;
  for(i = 2; i <= num; i++) {
    if (num > 1) {
      factorial = factorial * [i];
    }
  }
  return factorial;
}

//


