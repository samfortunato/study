let charge;

if (!date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd)) {
  charge = quantity * plan.summerRate;
} else {
  charge = quantity * plan.regularRate + plan.regularServiceCharge;
}

// |
// v

let charge;

if (isSummer()) {
  charge = calculateSummerCharge();
} else {
  charge = calculateRegularCharge();
}
