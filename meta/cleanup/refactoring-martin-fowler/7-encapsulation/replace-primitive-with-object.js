orders.filter((order) => {
  return (
    order.priority === 'high' ||
    order.priority === 'rush'
  );
});

// |
// v

class Priority {
  static normal = new Priority('normal');

  // ...
}

orders.filter((order) => {
  return order.priority.higherThan(Priority.normal);
});
