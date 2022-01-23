let REPLACEMENTS = {
    "a": [],
    "at": [],
    "an": [],
    "ar": [],
    "akomp": [],
    "asup": [],
    "ansup": [],
};

let long_conj_end = ["mer", "mest", "mest -e"];

// t, e, e, ere, est, este
let a1_nom_end = ["t", "e", "e"];
let a1_conj_end = ["ere", "est", "este"];
let a1_list = ['rød', 'grønn', 'gul'];

// t, e, e, mer, mest, mest -e
let a1_long = ['abnorm'];

let a2 = [];

// -, e, e, mer, mest, mest -e
let a2_long = ['abrupt', 'absolutt', 'absolutistisk', 'adelig'];

let a3 = [];

// -, -, -, mer, mest, mest -e
let a3_long = ['advarende'];

let categories = {
  a1: {
    list: a1_list, nom_end: a1_nom_end, conj_end: a1_conj_end
  }
}

function generateReplacements(categories) {
  for(let key in categories) {
    let list = categories[key]["list"];
    let nom_end = categories[key]["nom_end"];
    let conj_end = categories[key]["conj_end"];

    for(let word of list) {
      // nominative
      REPLACEMENTS["a"].push(word);
      REPLACEMENTS["at"].push(word + nom_end[0]);
      REPLACEMENTS["an"].push(word + nom_end[1]);
      REPLACEMENTS["ar"].push(word + nom_end[2]);

      // Conjugations
      let prefix, postfix;
      [prefix, postfix] = conj_end[2].split('-');
      REPLACEMENTS["akomp"].push(word + conj_end[0]);
      REPLACEMENTS["asup"].push(word + conj_end[1]);
      REPLACEMENTS["ansup"].push(prefix + word + postfix);
    }
  }
}

// Generate replacements before exporting
generateReplacements(categories);

// komparativ er det samme enten det er bestemt eller ikke!
REPLACEMENTS["ankomp"] = REPLACEMENTS["akomp"];

console.log(REPLACEMENTS)

export default REPLACEMENTS;
