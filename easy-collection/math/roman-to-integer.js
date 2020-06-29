// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/878/

const romanToInt = (s) => {
  // place to store result
  let total = 0;
  // place to store the prev number - default to 0
  let prev = 0;

  // store all roman numberals and their ineger value in object
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // iterate over string from end to start
  for (let i = s.length - 1; i >= 0; i--) {
    // set the current value to value at end of array
    const current = romanValues[s[i]];

    // if current value is less than prev (0 on first iteration), then subtract the current number
    if (current < prev) {
      total = total - current;
    } else {
      // else just add the current number to total
      total += current;
    }

    // set the prev value to current value for next iteration
    prev = romanValues[s[i]];
  }

  // return the total
  return total;
};

const romanToInt = (s) => {
  let total = 0;
  let prev = 0;

  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = s.length - 1; i >= 0; i--) {
    const current = romanValues[s[i]];

    total += current < prev ? -current : current;
    prev = romanValues[s[i]];
  }

  return total;
};

console.log(romanToInt('III'), 3);
console.log(romanToInt('IV'), 4);
console.log(romanToInt('IX'), 9);
console.log(romanToInt('LVIII'), 58);
console.log(romanToInt('MCMXCIV'), 1994);
