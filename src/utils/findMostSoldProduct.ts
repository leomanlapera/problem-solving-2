import type { Product, Sale } from "../types";

export function findMostSoldProduct(products: Product[], sales: Sale[]): {
    product: Product;
    totalQuantity: number,
    isTied: boolean,
    tiedProducts: Product[]
} {
    // Input validation
    if (!Array.isArray(products) || !Array.isArray(sales)) {
        throw new TypeError("Both products and sales must be arrays")
    }

    // First, calculate total quantity for each product
    const productQuantities = sales.reduce((acc, sale) => {
        // Get or initialize the quantity for this product
        acc[sale.productId] = (acc[sale.productId] || 0) + sale.quantity;
        return acc
    }, {} as Record<number, number>);

    // Find the maximum quantity
    const maxQuantity = Math.max(...Object.values(productQuantities))

    // Find all products wit hthe maximum quantity
    const mostSoldProductIds = Object.entries(productQuantities)
        .filter(([_, quantity]) => quantity === maxQuantity)
        .map(([productId]) => Number(productId))

    // Get the first product with maximum quantity
    const product = products.find(p => p.id === mostSoldProductIds[0])

    if (!product) {
        throw new Error("Product not found")
    }

    return {
        product,
        totalQuantity: maxQuantity,
        isTied: mostSoldProductIds.length > 1,
        tiedProducts: mostSoldProductIds.length > 1 ?
            products.filter(p => mostSoldProductIds.includes(p.id)) :
            []
    }
}