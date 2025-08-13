interface MoneyHolder {
  deposit(amount: number): void;
  withdraw(amount: number): number;
}

abstract class BankAccount implements MoneyHolder {

  protected balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): number {
    this.balance -= amount;

    return amount;
  }

}

class CheckingAccount extends BankAccount { }

class SavingsAccount extends BankAccount {

  private interestRate: number = 0.05;

  deposit(amount: number) {
    const amountWithInterest: number = amount * (1 + this.interestRate);

    this.balance += amountWithInterest;
  }

}

class Atm implements MoneyHolder {

  private balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): number {
    this.balance -= amount;

    return amount;
  }

}
