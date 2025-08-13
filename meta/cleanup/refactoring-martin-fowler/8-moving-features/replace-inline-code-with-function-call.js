let appliesToMass = false;

for (const state of states) {
  if (state === 'MA') appliesToMass = true;
}

// |
// v

const appliesToMass = states.includes('MA');
