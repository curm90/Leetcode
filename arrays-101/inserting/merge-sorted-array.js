// https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3253/

function merge(nums1, m, nums2, n) {
  while (n > 0) {
    if (m >= 0 && nums1[m - 1] > nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1];
      m--;
    } else {
      nums1[m + n - 1] = nums2[n - 1];
      n--;
    }
  }
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3), [
  1,
  2,
  2,
  3,
  5,
  6,
]);
