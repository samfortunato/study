const low = room.temperature.today.low;
const high = room.temperature.today.high;

if (plan.withinRange(low, high)) {
  // ...
}

// |
// v

if (plan.withinRange(room.temperature.today)) {
  // ...
}
