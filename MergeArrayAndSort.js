function mergeAndSortArray(arr1, arr2) {
  let mergedArray = [...arr1, ...arr2];
  mergedArray.sort((a, b) => {
    return a - b;
  });
  return mergedArray;
}
arr1 = [5, 1, 3, 8, 1, 3, 2];
arr2 = [6, 2, 4, 9, 2, 4, 1];
// output should be = [1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 6, 8, 9]
console.log(mergeAndSortArray(arr1, arr2));
