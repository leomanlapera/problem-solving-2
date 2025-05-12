import type { Product, Sale } from "../types";

export const calculateAverageOrderValue = (products: Product[], sales: Sale[]): number => {
    if (!Array.isArray(products) || !Array.isArray(sales)) {
        throw new TypeError("Products and sales should be an array type")
    }

    if (sales.length === 0) {
        return 0;
    }

    const { total, count } = sales.reduce((acc, sale) => {
        const product = products.find(p => p.id === sale.productId)
        if (product) {
            acc.total += product.price * sale.quantity
            acc.count++
        }
        return acc;
    }, { total: 0, count: 0 })

    return count === 0 ? 0 : Number((total / count).toFixed(2))
}