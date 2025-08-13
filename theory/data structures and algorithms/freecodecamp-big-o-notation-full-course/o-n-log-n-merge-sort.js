function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const [left, right] = divide();

  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted);

  function divide() {
    const midpoint = Math.floor(arr.length / 2);
    const left = arr.slice(0, midpoint);
    const right = arr.slice(midpoint);

    return [left, right];
  }

  function merge(left, right) {
    const merged = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        merged.push(left[i]);
        i++;
      } else {
        merged.push(right[j]);
        j++;
      }
    }

    merged.push(...left.slice(i));
    merged.push(...right.slice(j));

    return merged;
  }
}

// const arr = [1, 5, 2, 4, 100, 20, 6, -10_000, 10_000];
const arr = new Array(100_000).fill(null).map((_, idx) => idx);

const sorted = mergeSort(arr);
