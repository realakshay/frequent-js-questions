// write a logic to get unique object from below array
// input: [{name:"sai"},{name:"nang"},{name:"sai"},{name:"nang"},{name:"111"},{name:"123"}]
// output: [{name:"sai"},{name:"nang"},{name:"111"},{name:"123"}]
function UniqueObjectFromArrayOfObject(arrayOfObjects) {
  let uniqueObjects = [];
  arrayOfObjects.forEach((obj) => {
    let isPresent = uniqueObjects.find((resultObj) => {
      return resultObj.name == obj.name;
    });
    if (!isPresent) {
      uniqueObjects.push(obj);
    }
  });
  return uniqueObjects;
}
let input = [
  { name: "sai" },
  { name: "nang" },
  { name: "sai" },
  { name: "nang" },
  { name: "111" },
  { name: "123" },
];
console.log(UniqueObjectFromArrayOfObject(input));
