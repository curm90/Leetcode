// https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/587/

const merge = (nums1, m, nums2, n) => {
  while (n) {
    if (m <= 0 || nums2[n - 1] >= nums1[m - 1]) {
      nums1[m + n - 1] = nums2[n - 1];
      n--;
    } else {
      nums1[m + n - 1] = nums1[m - 1];
      m--;
    }
  }
};

const arr1 = [1, 2, 3, 0, 0, 0];
const arr2 = [2, 5, 6];

console.log(merge(arr1, 3, arr2, 3));
console.log(arr1);
