export class Order {
    budget_number: string;
    company: string;
    finalized: boolean;

    constructor(bn: string, c: string, fn: boolean) {
        this.budget_number = bn
        this.company = c
        this.finalized = fn
    }
}