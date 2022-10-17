//https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  indexNums1 = 0;
  indexNums2 = 0;
  size1 = nums1.length;
  size2 = nums2.length;
  sorted_array = [];
  while (indexNums1 <= size1 - 1 && indexNums2 <= size2 - 1) {
    const element1 = nums1[indexNums1];

    const element2 = nums2[indexNums2];

    if (element1 <= element2) {
      sorted_array.push(element1);
      indexNums1 = indexNums1 + 1;
    } else {
      sorted_array.push(element2);
      indexNums2 = indexNums2 + 1;
    }
  }

  while (true) {
    if (indexNums1 <= size1 - 1) {
      const element1 = nums1[indexNums1];
      sorted_array.push(element1);
      indexNums1 = indexNums1 + 1;
      if (indexNums1 > size1) {
        break;
      }
    } else if (indexNums2 <= size2 - 1) {
      const element2 = nums2[indexNums2];
      sorted_array.push(element2);
      indexNums2 = indexNums2 + 1;
      if (indexNums2 > size2) {
        break;
      }
    } else {
      break;
    }
  }
  console.log(sorted_array);
  const arraySortedSize = size1 + size2;
  if (arraySortedSize % 2 > 0) {
    medianIndex = Math.floor(arraySortedSize / 2);
    return sorted_array[medianIndex];
  } else {
    medianIndex = Math.floor(arraySortedSize / 2 - 1);
    return (sorted_array[medianIndex] + sorted_array[medianIndex + 1]) / 2;
  }
};
