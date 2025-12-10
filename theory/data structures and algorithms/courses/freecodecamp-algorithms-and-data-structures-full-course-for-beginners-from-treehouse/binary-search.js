function binarySearch(list, target) {
  let first = 0;
  let last = list.length - 1;

  while (first <= last) {
    const midpoint = Math.floor((first + last) / 2);

    if (list[midpoint] === target) {
      return midpoint;
    } else if (list[midpoint] < target) {
      first = midpoint + 1;
    } else if (list[midpoint] > target) {
      last = midpoint - 1;
    }
  }

  return -1;
}

const case1 = binarySearch([1, 2, 3], 2);
const case2 = binarySearch([1, 2, 3], 4);
const case3 = binarySearch([1, 2, 3, 10], 3);
const case4 = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 100, 10223], 100);

console.log({
  case1,
  case2,
  case3,
  case4,
});
