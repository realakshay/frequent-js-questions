function findMaxCountConsecutive1(str) {
  let maxCount = 0;
  let currentCount = 0;
  for (let index = 0; index < str.length; index++) {
    const element = str.charAt(index);
    if (element == "1") {
      currentCount = currentCount + 1;
      if (maxCount < currentCount) {
        maxCount = currentCount;
      }
    } else {
      currentCount = 0;
    }
  }
  return maxCount;
}
let str = "11hgdsagd11111155111111111111LL"; //output should be 12
console.log(findMaxCountConsecutive1(str));
