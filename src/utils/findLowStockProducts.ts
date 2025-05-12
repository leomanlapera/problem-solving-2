import type { Product } from "../types";

export const findLowStockProducts = (products: Product[], threshold: number = 100): Product[] => {
    if (!Array.isArray(products)) {
        throw new TypeError("Products should be an array type")
    }

    return products.filter((product) => product.stock < threshold)
}