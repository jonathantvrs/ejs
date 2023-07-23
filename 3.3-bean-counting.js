// First way countBs
function countBs(word) {
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (char === "B") counter++; 
  }

  return counter;
}

// First way countChar
function countChar(word, char) {
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) counter++; 
  }

  return counter;
}

// Second way 
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}