import { v7 as uuidv7 } from "uuid";

export class Customer {
    public id: string = uuidv7();
    public name: string;
    public tax: string;
    public address: string;

    constructor(name: string, tax: string, address: string) {
        this.name = name;
        this.tax = tax;
        this.address = address;
    }
}
