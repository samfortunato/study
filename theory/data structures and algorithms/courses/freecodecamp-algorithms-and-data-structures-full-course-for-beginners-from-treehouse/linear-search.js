function linearSearch(list, target) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) return i;
  }

  return -1;
}

const case1 = linearSearch([1, 2, 3], 2);
const case2 = linearSearch([1, 2, 3], 4);
const case3 = linearSearch([1, 2, 10, 3], 3);

console.log({
  case1,
  case2,
  case3,
});
