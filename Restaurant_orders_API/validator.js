import { orderSchema } from "./configOrders.js";

export function validateQuery(query) {
    const ALLOWED_QUERIES = ["status", "customer", "table"];
    const arrQueries = Object.keys(query);
    return arrQueries.every((que) => ALLOWED_QUERIES.includes(que));
    return res.status(400).json({
        success: false,
        message: "queries most be only: 'status' | 'customer' | 'table",
    });
}