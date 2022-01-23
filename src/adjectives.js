
"use strict";

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

/**
 * Takes in a string with adjective codes, and replaces them with correct adjectives
 */
export function replaceAdjectives(input, seed) {
    Math.seed(+seed);

    // By doing the longest replacements first, we always consume the longest possible %code.

}
