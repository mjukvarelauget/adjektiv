let REPLACEMENTS = {
    "a": [],
    "at": [],
    "an": [],
    "ar": [],
    "akomp": [],
    "asup": [],
    "ansup": [],
};


// Now we declare all the words and conjugations
let long_conj_end = ["mer-", "mest-", "mest-e"];

// t, e, e, ere, est, este
let a1_nom_end = ["t", "e", "e"];
let a1_conj_end = ["ere", "est", "este"];
let a1_list = ['rød', 'grønn', 'gul'];

// t, e, e, mer-, mest-, mest-e
let a1_long_list = ['abnorm'];

let a2_list = [];

// -, e, e, mer, mest, mest -e
let a2_long_list = ['abrupt', 'absolutt', 'absolutistisk', 'adelig'];

let a3_list = [];

// -, -, -, mer, mest, mest -e
let a3_long_list = ['advarende'];

let categories = {
  a1: {
    list: a1_list, nom_end: a1_nom_end, conj_end: a1_conj_end
  },
  a1_long: {
    list: a1_long_list, nom_end: a1_nom_end, conj_end: long_conj_end
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

      // Conjugates
      // For long adjectives, the conjugation is a prefix and possibly a postfix
      // For short adjective, the conjugation is allways postfix

      // A dash indicates a long adjective
      let isLong = conj_end[0].indexOf('-') !== -1;

      // Hard code for now
      if(isLong) {
	REPLACEMENTS["akomp"].push("mer " + word);
	REPLACEMENTS["asup"].push("mest " + word);
	REPLACEMENTS["ansup"].push("mest " + word + "e");
      }
      else {
	REPLACEMENTS["akomp"].push(word + conj_end[0]);
	REPLACEMENTS["asup"].push(word + conj_end[1]);
	REPLACEMENTS["ansup"].push(word);
      }
    }
  }
}

// Generate replacements before exporting
generateReplacements(categories);

// komparativ er det samme enten det er bestemt eller ikke!
REPLACEMENTS["ankomp"] = REPLACEMENTS["akomp"];

console.log(REPLACEMENTS)

export default REPLACEMENTS;
