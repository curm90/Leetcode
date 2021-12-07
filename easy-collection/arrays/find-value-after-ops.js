// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

function finalValueAfterOperations(operations) {
  let count = 0;

  for (const op of operations) {
    if (op.includes('--')) {
      count--;
    } else {
      count++;
    }
  }

  return count;
}

function finalValueAfterOperations(operations) {
  return operations.reduce((acc, curr) => (curr[1] == '+' ? ++acc : --acc), 0);
}

function finalValueAfterOperations(operations) {
  let count = 0;

  for (const op of operations) {
    op.replace('X', '') == '++' ? ++count : --count;
  }

  return count;
}

console.log(finalValueAfterOperations(['--X', 'X++', 'X++']), 1);
