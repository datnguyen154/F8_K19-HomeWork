import { Product } from "./Product.js";
import { ProductService } from "./ProductService.js";
import { Customer } from "./Customer.js";
import { OrderService } from "./OrderService.js";

const productService = new ProductService();

const laptop = new Product(1, "Laptop Dell", 15000000, 10);
const mouse = new Product(2, "Chuột Logitech", 500000, 20);

productService.addProduct(laptop);
productService.addProduct(mouse);

const customer = new Customer(1, "Nguyễn Văn A", "0123456789", "Hà Nội");

const orderService = new OrderService(productService);

// Tạo đơn hàng
const order = orderService.createOrder(customer);

console.log("Đơn hàng vừa tạo:");
console.log(order);

// Thêm sản phẩm
orderService.addProduct(order.id, laptop.id, 1);
orderService.addProduct(order.id, mouse.id, 2);

// In đơn hàng
console.log("\nThông tin đơn hàng:");
orderService.printOrders();

// Thanh toán
orderService.checkout(order.id);

console.log("\nSau khi thanh toán:");
orderService.printOrders();

// Kiểm tra tồn kho
console.log("\nTồn kho sau khi thanh toán:");
productService.printProducts();
