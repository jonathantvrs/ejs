// First way 
function reverseArray(array) {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--)
    newArray.push(array[i]);

  return newArray;
}

function reverseArrayInPlace(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    array.push(array[i]);
  }
  array.splice(0, array.length / 2);

  return array;
}

// Second way
function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}