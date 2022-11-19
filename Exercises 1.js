// Write a javascript code to check two numbers and return true if one the number is 100 or equal

const isEqual100 = (a, b) => {
  if (a + b === 100) {
    return true;
  } else if (a - b === 100) {
    return true;
  } else if ((a, b === 100)) {
    return true;
  } else {
    return 0;
  }
};

// extension of file

const fileExtension = (str) => {
  return str.slice(str.lastIndexOf("."));
};

// reverse alphabet
const reverseStr = (str) => {
  return str.split("").reverse().join("");
};

// find New! in string

const findNew = (str) => {
  let r = str.split(" ").filter((w) => {
    return w === "New!" ? true : false;
  });
  return r.join();
};

// add first 3 character with last character of string

const addFirstLastThreeCharacter = (str) => {};
console.log(addFirstLastThreeCharacter("I love Bangladesh"));
