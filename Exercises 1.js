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

// reverse string
function reverseWord(str) {
  return str.split("").reverse().join("");
}

// mm-dd-yyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
function formatData(date = new Date()) {
  const days = date.getDate();
  const months = date.getMonth();
  const years = date.getFullYear();
  return `${days}/${months}/${years}`;
}

formatData();
