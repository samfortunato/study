function foo(order) {
  const basePrice = order.basePrice;

  return basePrice > 1000;
}

// |
// v

function foo(order) {
  return order.basePrice > 1000;
}
