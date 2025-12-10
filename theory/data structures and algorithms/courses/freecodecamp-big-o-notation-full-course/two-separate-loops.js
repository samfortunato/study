/** O(n) */
function twoNLoops(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }

  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

twoNLoops(4);
