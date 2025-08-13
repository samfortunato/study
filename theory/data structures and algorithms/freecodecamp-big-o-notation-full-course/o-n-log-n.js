function linearithmic(n) {
  let half = n;

  while (half < 1) {
    half /= 2;

    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  }
}
