import { Customer } from "./Customer.js";
import { Order } from "./Order.js";
import { OrderItem } from "./OrderItem.js";
import { ProductService } from "./ProductService.js";

export class OrderService {
    orders: Order[];
    productService: ProductService;
    nextOrderId: number;

    constructor(productService: ProductService) {
        this.orders = [];
        this.productService = productService;
        this.nextOrderId = 1;
    }

    createOrder(customer: Customer): Order {
        const newOrder = new Order(this.nextOrderId, customer);

        this.orders.push(newOrder);
        this.nextOrderId++;

        return newOrder;
    }

    addProduct(orderId: number, productId: number, quantity: number): void {
        const order = this.findOrder(orderId);

        if (!order) {
            console.log("Không tìm thấy đơn hàng");
            return;
        }

        if (order.status !== "NEW") {
            console.log("Chỉ có thể thêm sản phẩm vào đơn hàng mới");
            return;
        }

        const product = this.productService.findById(productId);

        if (!product) {
            console.log("Không tìm thấy sản phẩm");
            return;
        }

        if (quantity <= 0) {
            console.log("Số lượng phải lớn hơn 0");
            return;
        }

        if (quantity > product.stock) {
            console.log("Số lượng sản phẩm trong kho không đủ");
            return;
        }

        const orderItem = new OrderItem(product, quantity);

        order.addItem(orderItem);

        console.log(`Đã thêm ${product.name} vào đơn hàng`);
    }

    removeProduct(orderId: number, productId: number): void {
        const order = this.findOrder(orderId);

        if (!order) {
            console.log("Không tìm thấy đơn hàng");
            return;
        }

        if (order.status !== "NEW") {
            console.log("Không thể xóa sản phẩm khỏi đơn hàng này");
            return;
        }

        order.removeItem(productId);

        console.log("Đã xóa sản phẩm khỏi đơn hàng");
    }

    checkout(orderId: number): void {
        const order = this.findOrder(orderId);

        if (!order) {
            console.log("Không tìm thấy đơn hàng");
            return;
        }

        if (order.status !== "NEW") {
            console.log("Đơn hàng không thể thanh toán");
            return;
        }

        if (order.items.length === 0) {
            console.log("Đơn hàng chưa có sản phẩm");
            return;
        }

        for (const item of order.items) {
            if (item.quantity > item.product.stock) {
                console.log(
                    `Sản phẩm ${item.product.name} không đủ số lượng trong kho`,
                );
                return;
            }
        }

        for (const item of order.items) {
            item.product.decreaseStock(item.quantity);
        }

        order.status = "PAID";

        console.log("Thanh toán đơn hàng thành công");
    }

    cancelOrder(orderId: number): void {
        const order = this.findOrder(orderId);

        if (!order) {
            console.log("Không tìm thấy đơn hàng");
            return;
        }

        if (order.status === "CANCELLED") {
            console.log("Đơn hàng đã bị hủy trước đó");
            return;
        }

        if (order.status === "PAID") {
            for (const item of order.items) {
                item.product.increaseStock(item.quantity);
            }
        }

        order.status = "CANCELLED";

        console.log("Đã hủy đơn hàng");
    }

    findOrder(orderId: number): Order | undefined {
        return this.orders.find((order) => order.id === orderId);
    }

    getOrders(): Order[] {
        return this.orders;
    }

    printOrders(): void {
        if (this.orders.length === 0) {
            console.log("Chưa có đơn hàng nào");
            return;
        }

        this.orders.forEach((order) => {
            order.printInvoice();
            console.log();
        });
    }
}
