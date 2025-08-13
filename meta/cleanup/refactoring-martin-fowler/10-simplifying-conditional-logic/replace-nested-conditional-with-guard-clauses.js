function getPayAmount() {
  let amount;

  if (isDead) {
    amount = getDeadAmount();
  } else {
    if (isSeparated) {
      amount = getSeparatedAmount();
    } else {
      if (isRetired) {
        amount = getRetiredAmount();
      } else {
        amount = getNormalAmount();
      }
    }
  }

  return amount;
}

// |
// v

function getPayAmount() {
  if (isDead) return getDeadAmount();
  if (isSeparated) return getSeparatedAmount();
  if (isRetired) return getRetiredAmount();

  return getNormalAmount();
}
