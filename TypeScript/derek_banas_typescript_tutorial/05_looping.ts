const randomArr: number[] = [5, 6, 7, 8];

for (let i in randomArr) {
  console.log(i);
}

for (let num of randomArr) {
  console.log(num);
}

const stringArr: string[] = randomArr.map(ele => ele.toString());

for (let str of stringArr) {
  console.log(str);
}
