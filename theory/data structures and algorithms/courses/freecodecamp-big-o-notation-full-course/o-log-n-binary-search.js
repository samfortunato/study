function binarySearch(arr, start, end, target) {
  if (start > end) return false;

  const midIdx = Math.floor((start + end) / 2);

  if (arr[midIdx] === target) return true;
  if (arr[midIdx] > target) return binarySearch(arr, start, midIdx - 1, target);
  if (arr[midIdx] < target) return binarySearch(arr, midIdx + 1, end, target);
}

const arr = new Array(100000).fill(null).map((_, idx) => idx);
const start = 0;
const end = arr.length - 1;
const target = 10000;

const result = binarySearch(arr, start, end, target);

console.log({ result });
