import { v7 as uuidv7 } from "uuid";

export class Project {
    public id: string = uuidv7();
    public customerId: string;
    public employeeId: string;

    constructor(customerId: string, employeeId: string) {
        this.customerId = customerId;
        this.employeeId = employeeId;
    }
}
