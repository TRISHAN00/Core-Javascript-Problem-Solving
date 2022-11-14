//1. random number
function randomNumber(n) {
  return Math.floor(Math.random() * n + 1);
}

//2. sorting names
const names = [
  "Zoe Wang",
  "Darius Mclean",
  "Valentin Ortiz",
  "Declan Krueger",
  "Annabella Webster",
];

function sortingName(arr) {
  return arr.sort();
}

//3. sorting number
const numbers = [5, 4, 8, 6, 1, 2, 3, 7, 9, 10];

function sortingNumber(n) {
  return n.sort((a, b) => a - b);
}

//4. find vowels from any sentence.
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countValue(sentence) {
  let count = 0;
  // console.log("Count:", count);

  const letters = Array.from(sentence);
  // console.log("Letter:", letters);

  letters.forEach((value) => {
    // console.log("Value", value);

    if (vowels.includes(value)) {
      // console.log("count if", count);

      count++;
      // console.log("count after if", count);
      // console.log("-----------------------------------");
    }
  });
  return count;
}

countValue("I love bangladesh");

//5. find duplicate numbers or name from array.
const arrNumber = [
  "Trishan",
  "Rishan",
  "Trishan",
  6,
  5,
  1,
  2,
  3,
  1,
  7,
  9,
  9,
  10,
];
const duplicate = arrNumber.filter((value, index, array) => {
  return array.indexOf(value) !== index;
});
