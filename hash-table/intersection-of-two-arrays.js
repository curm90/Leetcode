// https://leetcode.com/explore/learn/card/hash-table/183/combination-with-other-algorithms/1105/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
  // place to store the result
  const result = new Set();
  // sort both arrays
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  // initialise 2 pointers one for each array
  let i = 0,
    j = 0;
  // iterate over the arrays while both pointers are less than the length of the arrays
  while (i < nums1.length && j < nums2.length) {
    // if the current number in the first array is the same as the current number in the second array
    if (nums1[i] === nums2[j]) {
      // add that number to the result
      result.add(nums1[i]);
      // increment both pointers
      i += 1;
      j += 1;
      // else if the current number in the first array is less than the current number in the second array
    } else if (nums1[i] < nums2[j]) {
      // increment the first pointer
      i += 1;
    } else {
      // else increment second pointer
      j += 1;
    }
  }

  // return the result as an array
  return Array.from(result);
}

console.log(intersection([1, 2, 2, 1], [2, 2]), [2]);
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]), [9, 4]);
