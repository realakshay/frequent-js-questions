function reverseString(str) {
    let revString = "";
    for (let index = str.length - 1; index >= 0; index--) {
      const element = str.charAt(index);
      revString = revString + element;
    }
    return str === revString;
  }
  str = "abcba";
  console.log(reverseString(str));