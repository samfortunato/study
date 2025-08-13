function baseCharge(reading) {
  // ...
}

function taxableCharge(reading) {
  // ...
}

// |
// v

function addInfoToReading(reading) {
  const enhanced = cloneDeep(reading);

  enhanced.baseCharge = baseCharge(reading);
  enhanced.taxableCharge = taxableCharge(reading);

  return enhanced;
}
