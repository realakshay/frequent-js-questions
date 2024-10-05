function findLongestWord(sentence) {
  let allWords = sentence.split(" ");
  let longestWord = "";
  for (let word of allWords) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

let sentence = "Its a longest word sentence and should return sentence";
console.log(findLongestWord(sentence));
