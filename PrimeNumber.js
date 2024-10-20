function isPrimeNumber(num) {
  let result = true;
  if (num == 1) return false;
  for (let index = 2; index < num; index++) {
    if (num % index == 0) {
      result = false;
    }
  }
  return result;
}
isPrimeNumber(2);
