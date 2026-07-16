import { Customer } from "../entities/Customer.js";

export class CustomerService {
    private customers: Customer[] = [];

    public create(customer: Omit<Customer, "id">): Customer {
        const newCustomer = new Customer(
            customer.name,
            customer.tax,
            customer.address,
        );
        this.customers.push(newCustomer);
        return newCustomer;
    }

    public findById(id: string): Customer | null {
        const found = this.customers.find((c) => c.id === id);
        return found ?? null;
    }

    public updateById(id: string, data: Partial<Customer>): Customer | null {
        const customer = this.findById(id);
        if (!customer) {
            return null;
        }
        const { id: _omitId, ...updatableData } = data;
        Object.assign(customer, updatableData);

        return customer;
    }
}
