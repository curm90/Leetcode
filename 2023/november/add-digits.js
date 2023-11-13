// https://leetcode.com/problems/add-digits

function addDigits(num) {
  // convert num to a string
  const numStr = num.toString();

  // if length of the string num is 1 just return it, we have our result
  if (numStr.length === 1) return num;

  // iterate over the num string and sum the digits
  const sum = [...numStr].reduce((tot, curr) => +tot + +curr);

  // recurse with the new sum until num string is 1 digit
  return addDigits(sum);
}

function addDigits(num) {
  if (num < 10) return num;

  const sum = [...num.toString].reduce((tot, curr) => +tot + +curr);

  return addDigits(sum);
}

// Some math solution 🤯, saving for reference
function addDigits(num) {
  return 1 + ((num - 1) % 9);
}

console.log(addDigits(38), 2);
console.log(addDigits(0), 0);
