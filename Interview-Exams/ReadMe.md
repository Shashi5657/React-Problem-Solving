# Coding Challenges

This document provides brief explanations of the three coding challenge solutions implemented in JavaScript.

## 1. SearchingChallenge

### Description:

The function takes a string and finds the longest repeating pattern that appears at least twice. If no pattern is found, it returns `no null`.

### Key Steps:

- Iterate through all possible substrings.
- Check if the substring appears at least twice in the string.
- Keep track of the longest repeating pattern.
- Return `yes <longest_pattern>` if found, otherwise return `no null`.

---

## 2. ArrayChallenge

### Description:

The function determines if the given pairs of numbers can form a valid binary tree. A valid binary tree must have at most one root and each node can have at most two children.

### Key Steps:

- Extract parent-child relationships from the input.
- Ensure each child has only one parent.
- Ensure each parent has at most two children.
- Identify the root node and confirm there is only one.
- Return `true` if the tree is valid, otherwise return `false`.

---

## 3. StringChallenge

### Description:

The function reads a string containing number words (zero-nine) and operators (plus, minus), evaluates the mathematical expression, and returns the result as a written-out number.

### Key Steps:

- Extract numbers and operators from the string.
- Convert words to digits and operators.
- Evaluate the mathematical expression.
- Convert the final numeric result back to words.
- Return the final computed number as a string.

---

These solutions efficiently solve the given problems while ensuring correctness and performance. Happy coding!
