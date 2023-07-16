// First 8x8 board
let output = '';
for (let line = 0; line < 8; line++) {
  for (let column = 0; column < 8; column++) {
    if ((line + column) % 2 == 0) {
      output += ' ';
    } else {
      output += '#';
    }
  }
  output += '\n';
}

console.log(output);

// Second nxn board
let size = 10;
let board = '';
for (let x = 0; x < size; x++) {
  for (let y = 0; y < size; y++) {
  	if ((x + y) % 2 == 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}

console.log(board);
