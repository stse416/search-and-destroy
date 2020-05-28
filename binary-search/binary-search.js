"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  if (array.length === 0) return false;
  if (array.length === 1) return array[0] === target;
  let midpoint = Math.floor(array.length / 2);
  let startIndex = 0;
  let endIndex = array.length-1
  while (startIndex + 1 !== endIndex) {
    if (array[midpoint] === target) {
      return true;
    } else if (target < array[midpoint]) {
      endIndex = midpoint;
      midpoint = Math.floor((startIndex + endIndex) / 2);
    } else if (target > array[midpoint]) {
      startIndex = midpoint
      midpoint = Math.floor((startIndex + endIndex) / 2);
    }
  }

  if (array[startIndex] === target || array[endIndex] === target){
    return true
  }
  return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
``