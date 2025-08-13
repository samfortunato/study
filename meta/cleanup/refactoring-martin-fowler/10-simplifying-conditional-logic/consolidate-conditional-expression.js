function getDisabilityPaymentAmount() {
  if (employee.seniority < 2) return 0;
  if (employee.monthsDisabled > 12) return 0;
  if (employee.isPartTime) return 0;
}

// |
// v

function getDisabilityPaymentAmount() {
  if (isNotEligibleForDisability()) return 0;
}

function isNotEligibleForDisability() {
  return (
    employee.seniority < 2 ||
    employee.monthsDisabled > 12 ||
    employee.isPartTime
  );
}
