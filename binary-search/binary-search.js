"use strict"

// Complete this algo
const binarySearch = (array, target) => {
  const midpoint = Math.floor(array.length / 2)
  const higher = array.slice(midpoint)
  const lower = array.slice(0, midpoint)
  if (array[midpoint] === target) return true
  if (array.length === 1) return false
  if (target > array[midpoint]) {
    return binarySearch(higher, target)
  } else if (target < array[midpoint]) {
    return binarySearch(lower, target)
  }
}

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
