// First way
function loop(value, test, update, body) {
  if (test(value)) {
    body(value);
    loop(update(value), test, update, body);
  }
}

// Second way
function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) body(value);
}