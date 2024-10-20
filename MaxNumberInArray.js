function MaxNumberInArray(inputArray) {
  let maxNumber = 0;
  inputArray.forEach((num) => {
    if (num > maxNumber) {
      maxNumber = num;
    }
  });
  return maxNumber;
}
MaxNumberInArray([4, 2, 5, 6, 7, 1, 2, 3, 4, 1, 2, 22]);
