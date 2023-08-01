// First way
function range(start, end, step = 1) {
  let arr = []
  for (let i = start; step > 0 ? i <= end : i >= end; i += step)
    arr.push(i);

  return arr;
}

function sum(arr) {
  let sum = 0;
  for (let n of arr) 
    sum += n;

  return sum;
}

// Second way
function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}
