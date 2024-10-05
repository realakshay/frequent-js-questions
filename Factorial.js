function findFactorial(num) {
  let result = 1;
  for (let index = 1; index <= num; index++) {
    result = result * index;
  }
  return result;

  //   using recursive function
  if (n === 0) {
    return 1;
  }
  return n * findFactorial(n - 1);
}
let num = 5; //Output should be 120
console.log(findFactorial(num));
