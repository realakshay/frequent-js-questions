function ExtractEvenNumberFromArray(inputArray) {
  let resultArray = inputArray.reduce((result, current) => {
    if (current % 2 == 0) {
      result.push(current);
    }
    return result;
  }, []);
  return resultArray;
}
ExtractEvenNumberFromArray([4, 2, 5, 6, 7, 1, 2, 3, 4, 1, 2, 22]);
