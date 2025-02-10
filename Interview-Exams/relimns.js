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
// Test cases
console.log(searchPattern("aabejiabkfabed")); // Output: "yes abe"
console.log(searchPattern("123224")); // Output: "no null"
console.log(searchPattern("da2kr32a2")); // Output: "yes a2"
console.log(searchPattern("sskfssbbb9bbb")); // Output: "yes bbb"
console.log(searchPattern("aa2bbbaacbbb")); // Output: "yes bbb"

function ArrayChallenge(strArr) {
  // Step 1: Create Two Storage Containers
  let children = new Set(); // Set to store child nodes
  let parents = new Map(); // Map to store parent-child relationships
  //   children: This keeps track of all nodes that are children. A child should only have one parent.
  // parents: This stores each parent and a list of its children

  //   Step 2: Loop Through Each Parent-Child Pair
  for (let pair of strArr) {
    let [child, parent] = pair.match(/\d+/g).map(Number);
    //     Each pair is a string like "(1,2)".
    // We extract the numbers inside it using match(/\d+/g).map(Number).
    // 🔹 Example: "(1,2)" → Extracts [1, 2]
    // 1 is the child
    // 2 is the parent

    // Step 3: Check If A Child Has More Than One Parent
    if (children.has(child)) return "false"; // A child can only have one parent
    children.add(child);
    //     If a child is already in the children set, it means the child already has a parent.
    // Since a child should only have one parent, we return "false" immediately.

    // Step 4: Store the Parent-Child Relationship
    if (!parents.has(parent)) {
      parents.set(parent, []);
    }
    parents.get(parent).push(child);
    //     If the parent isn't already in the parents map, we add it with an empty list.
    // Then, we add the child to that parent's list of children.

    // Step 5: Check If A Parent Has More Than Two Children
    if (parents.get(parent).length > 2) return "false"; // A parent can have at most 2 children
  }

  //   Step 6: Identify the Root Node
  let allNodes = new Set([...children, ...parents.keys()]);
  let rootCandidates = [...allNodes].filter((node) => !children.has(node));
  //   A root node is a node that never appears as a child.
  // We create allNodes, which includes all parents and children.
  // We find rootCandidates → nodes that are not in the children set.

  //   Step 7: Check If There Is Exactly One Root
  return rootCandidates.length === 1 ? "true" : "false";
}

// Test cases
console.log(ArrayChallenge(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"])); // Output: "true"
console.log(ArrayChallenge(["(1,2)", "(1,3)"])); // Output: "false"
console.log(ArrayChallenge(["(1,2)", "(2,4)", "(7,2)", "(3,4)", "(5,4)"])); // Output: "true"
console.log(
  ArrayChallenge(["(1,2)", "(2,4)", "(7,2)", "(3,4)", "(5,4)", "(6,4)"])
); // Output: "false"
