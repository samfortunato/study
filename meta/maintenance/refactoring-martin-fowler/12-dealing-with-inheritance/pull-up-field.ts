class Employee {
  // ...
}

class Salesman extends Employee {
  private name: string;
}

class Engineer extends Employee {
  private name: string;
}

// |
// v

class Employee {
  protected name: string;
}

class Salesman extends Employee {
  // ...
}

class Engineer extends Employee {
  // ...
}
