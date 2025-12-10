function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const [leftHalf, rightHalf] = split(arr);

  const leftSorted = mergeSort(leftHalf);
  const rightSorted = mergeSort(rightHalf);

  return merge(leftSorted, rightSorted);

  function split(arr) {
    const midpoint = Math.floor(arr.length / 2);

    const leftHalf = arr.slice(0, midpoint);
    const rightHalf = arr.slice(midpoint);

    return [leftHalf, rightHalf];
  }

  function merge(leftSorted, rightSorted) {
    let i = 0;
    let j = 0;
    const merged = [];

    while (i < leftSorted.length && j < rightSorted.length) {
      if (leftSorted[i] < rightSorted[j]) {
        merged.push(leftSorted[i]);
        i++;
      } else {
        merged.push(rightSorted[j]);
        j++;
      }
    }

    merged.push(...leftSorted.slice(i));
    merged.push(...rightSorted.slice(j));

    return merged;
  }
}

function isArraySorted(arr) {
  let isSorted = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] && arr[i - 1] > arr[i]) {
      isSorted = false;
    }
  }

  return isSorted;
}

const arr = [4, 2, 1, 5, 3, 2, 10, 100, 44, 32, 54];
const sorted = mergeSort(arr);
const isSorted = isArraySorted(sorted);

console.log({ arr, sorted, isSorted });
