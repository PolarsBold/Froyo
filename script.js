function flavorSorter(userInputString) {
  const strings = userInputString.split(",");
  const flavors = [];
  const flavorsObject = {};
  for (let f of strings) {
    const flavor = f;
    if (flavor in flavorsObject) {
      flavorsObject[flavor] += 1;
    } else {
      flavorsObject[flavor] = 1;
    }
    flavors.push(f);
  }
  console.log(flavors);
  return flavorsObject;
}

const flavorsUserInput = prompt(
  "Please input Froyo flavors in a comma seperated list.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

console.log(flavorSorter(flavorsUserInput));
