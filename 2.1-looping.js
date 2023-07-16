// First way 
let line = '#'
for (let i = 0; i < 7; i++) {
  console.log(line);
  line += '#'
}

// Second way
for (let line = '#'; line.length < 8; line += '#') {
  console.log(line);
}