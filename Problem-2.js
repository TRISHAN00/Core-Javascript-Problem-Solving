// find duplicate words and length from array
const sentence =
  "Trishan want to be a full stack web developer. and Trishan can to switch anyway to other section.";

const matches = sentence.match(/Trishan/gi);
const occurrence = matches ? matches.length : 0;
