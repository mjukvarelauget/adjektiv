
let REPLACEMENTS = {
    "a": [],
    "at": [],
    "an": [],
    "ar": [],
    "akomp": [],
    "asup": [],
    "ansup": [],
};

// t, e, e, ere, est, este
let a1 = ['rød', 'grønn', 'gul'];

// t, e, e, mer, mest, mest -e
let a1_long = ['abnorm'];

let a2 = [];

// -, e, e, mer, mest, mest -e
let a2_long = ['abrupt', 'absolutt', 'absolutistisk', 'adelig'];

let a3 = [];

// -, -, -, mer, mest, mest -e
let a3_long = ['advarende'];

let categorires = {
  a1: a1, a1_long:a1_long, a2: a2, a2_long: a2_long, a3: a3, a3_long: a3_long
};

export function generateReplacements() {
  for(key in category) {
    console.log(key)
  }
}

// komparativ er det samme enten det er bestemt eller ikke!
REPLACEMENT["%ankomp"] = REPLACEMENT["%akomp"];

/**
 * Takes in a string with adjective codes, and replaces them with correct adjectives
 */
export function replaceAdjectives(input, seed) {
    const random = mulberry32(+seed);
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

export default REPLACEMENTS;
