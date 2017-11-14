function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  return str.replace(/(?!^)([A-Z])/g, ' $1').replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
