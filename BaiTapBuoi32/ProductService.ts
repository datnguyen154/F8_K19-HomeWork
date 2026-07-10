import { Product } from "./Product.js";

export class ProductService {
    products: Product[];

    constructor() {
        this.products = [];
    }

    addProduct(product: Product): void {
        this.products.push(product);
    }

    updateProduct(id: number, data: Partial<Product>): void {
        const product = this.findById(id);

        if (!product) {
            console.log("Không tìm thấy sản phẩm");
            return;
        }

        Object.assign(product, data);
    }

    deleteProduct(id: number): void {
        this.products = this.products.filter((product) => product.id !== id);
    }

    findById(id: number): Product | undefined {
        return this.products.find((product) => product.id === id);
    }

    findByName(keyword: string): Product[] {
        return this.products.filter((product) =>
            product.name.toLowerCase().includes(keyword.toLowerCase()),
        );
    }

    getAllProducts(): Product[] {
        return this.products;
    }

    printProducts(): void {
        this.products.forEach((product) => {
            console.log(product.toString());
        });
    }
}
