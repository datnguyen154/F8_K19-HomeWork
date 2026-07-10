interface CustomerI {
    id: number;
    name: string;
    phone: string;
    address: string;
}

export class Customer implements CustomerI {
    id: number;
    name: string;
    phone: string;
    address: string;

    constructor(id: number, name: string, phone: string, address: string) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.address = address;
    }

    updatePhone(phone: string): void {
        this.phone = phone;
    }

    updateAddress(address: string): void {
        this.address = address;
    }

    toString(): string {
        return `ID: ${this.id}, Tên: ${this.name}, SĐT: ${this.phone}, Địa chỉ: ${this.address}`;
    }
}
