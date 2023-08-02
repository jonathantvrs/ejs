// function deepEqual(value1, value2) {
//   if (typeof value1 === 'object' && typeof value2 === 'object') {
//     if (value1 === null && value2 === null) {
//       return true;
//     } 

//     if (value1 !== null && 
//         value2 !== null &&
//         Object.keys(value1).length === 
//         Object.keys(value2).length) {
//       return deepEqual(Object.keys(value1), Object.keys(value2));  
//     } 
//   } 

//   if (typeof value1 === typeof value2) {
//     return true;
//   }

//   return false;
// }

// Second way
function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}