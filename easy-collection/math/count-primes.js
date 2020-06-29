// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/744/

const countPrimes = (n) => {
  let count = 0;

  for (let i = 1; i < n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }

  return count;
};

const isPrime = (num) => {
  if (num <= 1) return false;

  let counter = 2;

  while (counter * counter <= num) {
    if (num % counter === 0) return false;
    counter++;
  }

  return true;
};

console.log(countPrimes(50), 15);
console.log(countPrimes(7), 3);
console.log(countPrimes(186), 42);
