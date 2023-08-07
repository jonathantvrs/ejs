// First way
arrays.reduce((flat, _, index, array) => flat.concat(array[index]), []);
arrays.reduce((flat, unused, index, array) => flat.concat(array[index]), []);

// Second way
arrays.reduce((flat, current) => flat.concat(current), []);
