// Write a javascript program to check two numbers and return true if one of number is 100 or if the sum of the two numbers is 100

function isSumEqual100(a, b) {
  if (a + b === 100) {
    return true;
  }
  if (a || b === 100) {
    return true;
  } else {
    return false;
  }
}

console.log(isSumEqual100(0, 100));
console.log(isSumEqual100(100, 0));
console.log(isSumEqual100(50, 50));
console.log(isSumEqual100(40, 60));
console.log(isSumEqual100(0, 10));
