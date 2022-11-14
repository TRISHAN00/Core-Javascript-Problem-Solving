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
  return [longestWord, names.indexOf(longestWord)];
}
longestWord(arr);

// fizzBuzz

function fizzBuzz(number) {
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0) {
      // console.log(`${i} is Fizz Number`);
    } else if (i % 5 === 0) {
      // console.log(`${i} is Buzz Number`);
    } else if (i % 15 === 0) {
      // console.log(`${i} is FizzBuzz Number`);
    } else {
      // console.log(i);
    }
  }
}

fizzBuzz(10);

// filter falsy value from the array
const mixedArray = ["trs", null, undefined, "saha", 0, 2, NaN, 20, "apple"];

const trueArray = mixedArray.filter((n) => {
  if (n) {
    return true;
  } else {
    return false;
  }
});

// find truthy value from object
const obj = {
  a: "Trishan",
  b: "Thanks to all",
  c: 50,
  d: null,
  e: undefined,
  f: 44,
  g: 0,
  h: NaN,
  i: "",
};

function findTruthyObj(obj) {
  for (let i in obj) {
    if (!obj[i]) {
      delete obj[i];
    }
  }
  return obj;
}
findTruthyObj(obj)
