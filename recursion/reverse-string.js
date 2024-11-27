// https://leetcode.com/explore/learn/card/recursion-i/250/principle-of-recursion/1440/

function reverseString(s) {
  function swap(left, right) {
    if (left >= right) {
      return;
    }

    [s[left], s[right]] = [s[right], s[left]];
    swap(left + 1, right - 1);
  }

  swap(0, s.length - 1);
}
