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