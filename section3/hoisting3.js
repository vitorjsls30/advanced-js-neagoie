// What will be the output of it?
function bigBrother() {
  function littleBrother() {
    return 'it is me!';
  }
  return littleBrother();
  function littleBrother() {
    return 'no me!';
  }
}

// Answer: 'no me!'
// Explanation:
// That's because in the creation phase, littleBrother 
// has it's value reassigned, so it's return becomes 'no me!'