import type { Sale } from "../types";

export const getUniqueCustomersCount = (sales: Sale[]): number => {
    if (!Array.isArray(sales)) {
        throw new TypeError("Sales should be an array type")
    }

    const results = sales.map((sale) => sale.customerId)
    return new Set(results).size
}