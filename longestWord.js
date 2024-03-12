const sentence = "Nous sommes le 12 mars 2024";

const getLongestWord = (sentenceString) => {
  const wordArray = toWordArray(sentenceString);
  return wordArray.sort(compareWordsFromLongestToShortest)[0];
};

const toWordArray = (sentenceString) => {
  return sentenceString.split(" ");
};

const compareWordsFromLongestToShortest = (firstWord, secondWord) => {
  return secondWord.length - firstWord.length;
};

console.log("The sentence : " + sentence);
console.log("The longest word is..." + getLongestWord(sentence));
