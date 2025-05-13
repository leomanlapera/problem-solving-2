import type { Product, Sale } from "../types";

export const calculateDailyRevenue = (products: Product[], sales: Sale[]): Record<string, number> => {
    if (!Array.isArray(products) || !Array.isArray(sales)) {
        throw new TypeError("Products and sales should be array types")
    }

    // Group sales by date and calculate revenue for each sale
    const dailyRevenue = sales.reduce((acc, sale) => {
        const product = products.find(p => p.id === sale.productId)

        if (product) {
            const revenue = product.price * sale.quantity
            acc[sale.date] = (acc[sale.date] || 0) + revenue
        }

        return acc
    }, {} as Record<string, number>)


    // Round all values to 2 decimal places
    return Object.entries(dailyRevenue).reduce((acc, [date, revenue]) => {
        acc[date] = Number(revenue.toFixed(2))
        return acc
    }, {} as Record<string, number>)
}