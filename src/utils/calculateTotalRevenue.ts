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

export const calculateTotalRevenue = (products: Product[], sales: Sale[]): number => {
    if (!Array.isArray(products) || !Array.isArray(sales)) {
        throw new TypeError("Both products and sales must be arrays")
    }

    if (products.length === 0 || sales.length === 0) {
        return 0;
    }

    return sales.reduce((totalRevenue, sale) => {
        const product = products.find(p => p.id === sale.productId)
        return totalRevenue + (product ? product.price * sale.quantity : 0)
    }, 0)
}