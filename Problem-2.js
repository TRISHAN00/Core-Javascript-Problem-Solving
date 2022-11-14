//6. find duplicate words and length from array
const sentence =
  "Trishan want to be a full stack web developer. and Trishan can to switch anyway to other section.";

const matches = sentence.match(/Trishan/gi);
const occurrence = matches ? matches.length : 0;

//7. input: linearSearch (['a', 'b', 'c', 'd'], 'c')
// output : position or not found
// problem is implement linearSearch() function

function linearSearch(arr, val) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return "not found!";
}

//8. console.log(linearSearch(["a", "b", "c"], "b"));

// ---------- Longest name and index --------------
const arr = [
  "Zoe Wang",
  "Darius Mclean",
  "Valentin Ortiz",
  "Declan Krueger",
  "Annabella Webster",
];
function longestWord(names) {
  let longestWord = "";

  for (const name of names) {
    if (name.length > longestWord.length) {
      longestWord = name;
    }
  }
  return [longestWord, names.indexOf(longestWord)]) 
}
longestWord(arr);
