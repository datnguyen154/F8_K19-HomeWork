export class Product {
    id: number;
    name: string;
    price: number;
    stock: number;

    constructor(id: number, name: string, price: number, stock: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    increaseStock(quantity: number): void {
        this.stock += quantity;
    }

    decreaseStock(quantity: number): void {
        if (quantity > this.stock) {
            console.log("Không đủ hàng trong kho");
            return;
        }
        this.stock -= quantity;
    }

    toString(): string {
        return `ID: ${this.id}, Tên sản phẩm: ${this.name}, Giá: ${this.price}, Tồn kho: ${this.stock}`;
    }
}
