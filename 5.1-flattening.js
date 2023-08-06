// First way
function flatten(arrays) {
  return arrays.reduce((acc, actual, index, array) => {
    return acc.concat(array[index]);
  }, [])
}

// Second way
function flatten(arrays) {
  return arrays.reduce((flat, current) => flat.concat(current), []);
}