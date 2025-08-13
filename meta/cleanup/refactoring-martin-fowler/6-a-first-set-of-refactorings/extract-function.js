function doSomething() {
  doSomeCode();

  // do other code
  const val = getValue();
  console.log(val);
}

// |
// v

function doSomething() {
  doSomeCode();
  doOtherCode();
}

function doOtherCode() {
  const val = getValue();
  console.log(val);
}
