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

// extension of a file name
function getFileExtension(str) {
  return str.slice(str.lastIndexOf("."));
}
