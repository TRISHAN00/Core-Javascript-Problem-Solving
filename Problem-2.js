// find duplicate words and length from array
const sentence =
  "Trishan want to be a full stack web developer. and Trishan can to switch anyway to other section.";

const matches = sentence.match(/Trishan/gi);
const occurrence = matches ? matches.length : 0;

// input: linearSearch (['a', 'b', 'c', 'd'], 'c')
// output : position or not found
// problem is implement linearSearch() function

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return "not found!";
}

console.log(linearSearch(["a", "b", "c"], "c"));
