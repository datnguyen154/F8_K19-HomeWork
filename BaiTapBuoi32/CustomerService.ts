import { Customer } from "./Customer.js";

export class CustomerService {
    customers: Customer[] = [];

    addCustomer(customer: Customer): void {
        this.customers.push(customer);
    }

    updateCustomer(id: number, data: Partial<Customer>): void {
        const customer = this.findById(id);

        if (!customer) {
            console.log("Không tìm thấy khách hàng");
            return;
        }

        Object.assign(customer, data);
    }

    deleteCustomer(id: number): void {
        this.customers = this.customers.filter(
            (customer) => customer.id !== id,
        );
    }

    findById(id: number): Customer | undefined {
        return this.customers.find((customer) => customer.id === id);
    }

    findByPhone(phone: string): Customer | undefined {
        return this.customers.find((customer) => customer.phone === phone);
    }

    getAllCustomers(): Customer[] {
        return this.customers;
    }

    printCustomers(): void {
        this.customers.forEach((customer) => {
            console.log(customer.toString());
        });
    }
}
