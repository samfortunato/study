export class CheckingAccount {

    private _balance = 0;

    get balance() { return this._balance; }
    set balance(val: number) { this._balance = val; }

    constructor(
        public title: string
    ) { }

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {
        this.balance -= amount;
    }

}
