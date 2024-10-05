function checkPalindromeString(str) {
  // By using built in function
  //   let revString = str.split("").reverse().join("");
  //   return str === revString;

  //   by using core logic
  let revString = "";
  for (let index = str.length - 1; index >= 0; index--) {
    const element = str.charAt(index);
    revString = revString + element;
  }
  return str === revString;
}
str = "abcba";
console.log(checkPalindromeString(str));
