// https://leetcode.com/problems/generate-fibonacci-sequence/

/**
 * @return {Generator<number>}
 */
function* fibGenerator() {
  let current = 0;
  let next = 1;

  while (true) {
    yield current;
    [current, next] = [next, next + current];
  }
}

const gen = fibGenerator();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 5
console.log(gen.next().value); // 8
