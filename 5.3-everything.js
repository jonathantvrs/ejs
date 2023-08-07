// First way
function every(array, test) {
  for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}

// Second way
function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}
