function logarithmic(n) {
  if (n === 0) return;

  let half = Math.floor(n / 2);

  return logarithmic(half);
}

logarithmic(8);
