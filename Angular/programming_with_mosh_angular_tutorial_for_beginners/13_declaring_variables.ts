var variable3 = 'sup';
const variable = 'sup';
let variable2 = 'sup';

function logI() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log(`Finally, i = ${i}`);
}

logI();


function logILet() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  // error
  // console.log(`Finally, i = ${i}`);
}

logILet();
