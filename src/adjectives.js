
REPLACEMENTS = {
    "%a": ["grønn"],
    "%at": ["grønt"],
    "%an": ["grønne"],
    "%ar": ["grønne"],
    "%akomp": ["grønnere"],
    "%asup": ["grønnest"],
    "%ansup": ["grønneste"],
};
// komparativ er det samme enten det er bestemt eller ikke!
REPLACEMENT["%ankomp"] = REPLACEMENT["%akomp"];

export function addSimpleAdjective(base) {
    const neutrum = base.endsWith("t") ? base : base+"t";
    REPLACEMENTS["%a"].append(base);
    REPLACEMENTS["%at"].append(neutrum);
    REPLACEMENTS["%an"].append(base+"e");
    REPLACEMENTS["%ar"].append(base+"e");
    REPLACEMENTS["%akomp"].append(base+"ere");
    REPLACEMENTS["%asup"].append(base+"est");
    REPLACEMENTS["%ansup"].append(base+"este");
}

export function addLongAdjective(base) {
    const neutrum = base.endsWith("t") ? base : base+"t";
    REPLACEMENTS["%a"].append(base);
    REPLACEMENTS["%at"].append(neutrum);
    REPLACEMENTS["%an"].append(base+"e");
    REPLACEMENTS["%ar"].append(base+"e");
    REPLACEMENTS["%akomp"].append("mer " + base);
    REPLACEMENTS["%asup"].append("mest " + base);
    REPLACEMENTS["%ansup"].append("mest " + base+"e");
}

// TODO call these from a list
addSimpleAdjective("smart");
addSimpleAdjective("lur");
addLongAdjective("intelligent");

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
