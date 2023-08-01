function arrayToList(array) {
  let list = null
  for (let i = array.length - 1; i >= 0; i--) {
    list = prepend(array[i], list);
  }
  return list;
}

function prepend(value, list) {
  return { value, rest: list }; 
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function nth(list, index) {
  if (!list) return undefined;
  else if (index == 0) return list.value;
  else return nth(list.rest, n - 1);
}