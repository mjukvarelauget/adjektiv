import REPLACEMENTS from "./adjectives.js"

/**
 * Takes in a string with adjective codes, and replaces them with correct adjectives
 */
export function replaceAdjectives(input, seed) {
  const random = mulberry32(+seed);
  
  // Build a happy little trie
  const trie = {};
  for(const code in REPLACEMENTS) {
    let head = trie;
    for(const char of code)
      trie[char] = (head = (trie[char] ?? {}));
    head.replacement = REPLACEMENTS[code];
  }

  let output = "";
  let seen = 0; // We are done with all input chars before seen
  while(true) {
    // Find the next %
    const found = input.indexOf("%", seen);
    
    // If there is none, we are done
    if (found == -1) {
      output += input.slice(seen, input.length)
      return output;
    }

    // Add all input up to the % to the output
    output += input.slice(seen, found);
    let headChar = found+1;
    let head = trie;
    seen = headChar;
    // Go through the trie as long as it still accepts
    while (head.hasOwnProperty(input.charAt(headChar))) {
      head = head[input.charAt(headChar++)];

      // If the word [found+1, headChar-1] is a valid replacement,
      // it will be our replacement, unless we find an even longer one, so update seen!
      if (head.hasOwnProperty("replacement"))
        seen = headChar;
    }

    if (seen == found+1) //It was not a valid replacement, put the % back in the output
      output += "%";
    else {      
      const code = input.slice(found+1, seen);
      const replacements = REPLACEMENTS[code];
      
      output += replacements[random() % replacements.length];
    }
  }
}

// Our random generator
function mulberry32(a) {
  return function() {
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}
