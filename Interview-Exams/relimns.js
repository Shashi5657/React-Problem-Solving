// This function finds the longest repeating pattern in a given string and returns it. If no repeating pattern is found, it returns "no null"

function searchPattern(str) {
  // Step 1: Create two empty variables
  // maxPattern is used to store the longest repeating pattern we find.
  let maxPattern = "";
  // patternFound is used to check if we find any repeating pattern at all.
  let patternFound = false;

  // Step 2: Loop through every possible part of the string
  // The first loop (i) picks a starting point in the string.
  // The second loop (j) picks an ending point that is ahead of i.
  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length; j++) {
      // Step 3: Extract a pattern from the string
      // substring(i, j) takes a small part (pattern) from the string between index i and j.
      let pattern = str.substring(i, j);
      // Step 4: Find how many times the pattern appears
      // This creates a regular expression (regex) to find all places where the pattern appears in the string.
      // str.match(regex) finds all occurrences of this pattern.
      let regex = new RegExp(pattern, "g");
      let matches = str.match(regex);

      //   Step 5: Check if the pattern repeats
      if (matches && matches.length > 1 && pattern.length > 1) {
        patternFound = true;
        if (pattern.length > maxPattern.length) {
          maxPattern = pattern;
        }
      }
    }
  }
  return patternFound ? `yes ${maxPattern}` : "no null";
}
