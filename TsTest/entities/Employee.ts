import { v7 as uuidv7 } from "uuid";

export class Employee {
    public id: string = uuidv7();
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public receiveNoti(message: string): void {
        console.log(
            `${this.id} - ${this.name} received notification: ${message}`,
        );
    }
}
