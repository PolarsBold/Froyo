function flavorSorter(userInputString) {
  const strings = userInputString.split(",");
  const flavors = [];
  for (let f of strings) {
    flavors.push(f);
  }
  return flavors;
}

const flavorsUserInput = prompt(
  "Please input Froyo flavors in a comma seperated list.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

console.log(flavorSorter(flavorsUserInput));
