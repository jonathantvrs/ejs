// First way
function isEven(N) {
  if (N === 0) {
    return true;
  } else if (N === 1) {
    return false;
  } else if (N < 0) {
    return isEven(-N);
  } else {
    return isEven(N - 2);
  }
}

// Second way 
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}