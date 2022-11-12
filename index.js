// random number
function randomNumber(n) {
  return Math.floor(Math.random() * n + 1);
}

// sorting names
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

// sorting number
const numbers = [5, 4, 8, 6, 1, 2, 3, 7, 9, 10];

function sortingNumber(n) {
  return n.sort((a, b) => a - b);
}

// find vowels from any sentence.
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countValue(sentence) {
  let count = 0;
  console.log("Count:", count);

  const letters = Array.from(sentence);
  console.log("Letter:", letters);

  letters.forEach((value) => {
    console.log("Value", value);

    if (vowels.includes(value)) {
      console.log("count if", count);

      count++;
      console.log("count after if", count);
      console.log("-----------------------------------");
    }
  });
  return count;
}

countValue("I love bangladesh");
