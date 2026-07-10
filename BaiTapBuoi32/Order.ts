import { Customer } from "./Customer.js";
import { OrderItem } from "./OrderItem.js";

type OrderStatus = "NEW" | "PAID" | "CANCELLED";

interface OrderI {
    id: number;
    customer: Customer;
    items: OrderItem[];
    createdAt: Date;
    status: OrderStatus;
}

export class Order implements OrderI {
    id: number;
    customer: Customer;
    items: OrderItem[];
    createdAt: Date;
    status: OrderStatus;

    constructor(id: number, customer: Customer) {
        this.id = id;
        this.customer = customer;
        this.items = [];
        this.createdAt = new Date();
        this.status = "NEW";
    }

    addItem(item: OrderItem): void {
        const existingItem = this.items.find(
            (orderItem) => orderItem.product.id === item.product.id,
        );

        if (existingItem) {
            existingItem.quantity += item.quantity;
            return;
        }

        this.items.push(item);
    }

    removeItem(productId: number): void {
        this.items = this.items.filter((item) => item.product.id !== productId);
    }

    calculateTotal(): number {
        return this.items.reduce((total, item) => {
            return total + item.getTotal();
        }, 0);
    }

    printInvoice(): void {
        console.log("===== HÓA ĐƠN =====");
        console.log(`Mã đơn hàng: ${this.id}`);
        console.log(`Khách hàng: ${this.customer.name}`);
        console.log(`Ngày tạo: ${this.createdAt.toLocaleString()}`);
        console.log(`Trạng thái: ${this.status}`);
        console.log("-------------------");

        this.items.forEach((item) => {
            console.log(
                `${item.product.name} - ${item.quantity} x ${item.price} = ${item.getTotal()}`,
            );
        });

        console.log("-------------------");
        console.log(`Tổng tiền: ${this.calculateTotal()}`);
    }
}
