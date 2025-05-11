export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
}

export interface Sale {
    id: number;
    productId: number;
    quantity: number;
    date: string;
    customerId: number;
}