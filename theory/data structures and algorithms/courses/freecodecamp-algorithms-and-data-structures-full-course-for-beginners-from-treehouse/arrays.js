const array = [1, 2, 3];
const item1 = array[0];

array[3] // undefined

const found = array.find(item => item === 2);

function doesItemExist(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return true;
  }

  return false;
}

const does3Exist = doesItemExist(array, 3);
const does4Exist = doesItemExist(array, 4);
