function removeDuplicateFromArray(inputArray) {
  let correctArray = inputArray.reduce((newArray, current) => {
    if (!newArray.includes(current)) {
      newArray.push(current);
    }
    return newArray;
  }, []);
  return correctArray;

  //   using set
  let set = new Set(inputArray);
  correctArray = Array.from(set);
  return correctArray;
}
let inputArray = ["A", "B", "C", "B"];
console.log(removeDuplicateFromArray(inputArray));
