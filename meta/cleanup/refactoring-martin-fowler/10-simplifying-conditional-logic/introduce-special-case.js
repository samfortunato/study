let customerName;

if (customer === 'unknown') customerName = 'occupant';

// |
// v

class NullCustomer {
  get name() { return 'occupant'; }
}
