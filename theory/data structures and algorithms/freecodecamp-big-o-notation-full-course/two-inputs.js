/** O(n+k) */
function nPlusK(n, k) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }

  for (let i = 1; i <= k; i++) {
    console.log(i);
  }
}

/** O(nk) */
function nTimesK(n, k) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      console.log(i);
    }
  }
}

nPlusK(4, 3);
nTimesK(4, 3);
