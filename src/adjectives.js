let REPLACEMENTS = {
    "a": [],
    "at": [],
    "an": [],
    "ar": [],
    "akomp": [],
    "asup": [],
    "ansup": [],
};


// Rules for conjugating
let long_conj_end = ["mer _", "mest _", "mest _e"];
let short_conj_end = ["ere", "est", "este"]; 

// t, e, e, ere, est, este
let a1_nom_end = ["t", "e", "e"];
let a1_conj_end = short_conj_end;

// t, e, e, mer-, mest-, mest-e

// -, e, e, mer, mest, mest -e
let a2_nom_end = ["", "e", "e"];
let a2_conj_end = short_conj_end;

let a3_list = [];

// -, -, -, mer, mest, mest -e
let a3_long_list = ['advarende'];

// Lists
let a1_list = ['rød', 'grønn', 'gul'];
let a1_long_list = ['abnorm'];
let a2_list = [];
let a2_long_list = [
  'abrupt', 'absolutt', 'absolutistisk', 'adelig', 'abstinent', 'adaptiv'
];

// The full data structure
let categories = {
  a1: {
    list: a1_list, nom_end: a1_nom_end, conj_end: a1_conj_end
  },
  a1_long: {
    list: a1_long_list, nom_end: a1_nom_end, conj_end: long_conj_end
  },
  
  a2: {
    list: a2_list, nom_end: a2_nom_end, conj_end: a2_conj_end
  },
  a2_long: {
    list: a2_long_list, nom_end: a2_nom_end, conj_end: long_conj_end
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

      // An underscore indicates a long adjective, which is a special case
      let isLong = conj_end[0].indexOf('_') !== -1;

      // Hard code for now
      if(isLong) {
	REPLACEMENTS["akomp"].push(conj_end[0].replace('_', word));
	REPLACEMENTS["asup"].push(conj_end[1].replace('_', word));
	REPLACEMENTS["ansup"].push(conj_end[2].replace('_', word));
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
