calculateTargetTemperature('basic');

function calculateTargetTemperature(plan) {
  const currentTemperature = thermostat.currentTemperature;

  // ...
}

// |
// v

calculateTargetTemperature('basic', thermostat.currentTemperature);

function calculateTargetTemperature(plan, currentTemperature) {
  // ...
}
