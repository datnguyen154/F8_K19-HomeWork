import { Product } from "./Product.js";

interface OrderItemI {
    product: Product;
    quantity: number;
    price: number;
}

export class OrderItem implements OrderItemI {
    product: Product;
    quantity: number;
    price: number;

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
        this.price = product.price;
    }

    getTotal(): number {
        return this.price * this.quantity;
    }
}
