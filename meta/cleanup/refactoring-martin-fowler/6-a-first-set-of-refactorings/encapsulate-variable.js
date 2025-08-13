let defaultOwner = {
  firstName: 'Foo',
  lastName: 'Bar',
};

// |
// v

let defaultOwner = {
  firstName: 'Foo',
  lastName: 'Bar',
};

export function getDefaultOwner() {
  return defaultOwner;
}

export function setDefaultOwner(owner) {
  defaultOwner = owner;
}
