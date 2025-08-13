function recursiveBinarySearch(list, target) {
  if (!list.length) return false;

  const midpoint = Math.floor(list.length / 2);

  if (list[midpoint] === target) {
    return true;
  } else if (list[midpoint] < target) {
    return recursiveBinarySearch(list.slice(midpoint + 1), target);
  } else if (list[midpoint] > target) {
    return recursiveBinarySearch(list.slice(0, midpoint), target);
  }
}

const case1 = recursiveBinarySearch([1, 2, 3], 2);
const case2 = recursiveBinarySearch([1, 2, 3], 4);
const case3 = recursiveBinarySearch([1, 2, 3, 10], 3);
const case4 = recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 100, 10223], 100);
const case5 = recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9);
const case6 = recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1);
const case7 = recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 0);

console.log({
  case1,
  case2,
  case3,
  case4,
  case5,
  case6,
  case7,
});
