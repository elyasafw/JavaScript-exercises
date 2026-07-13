import { orderSchema } from "./configOrders.js";

export function logger(req, res, next) {
    const time = new Date().toISOString();
    console.log(`[ ${time} ] | ${req.method} | ${req.url}`);
    next();
}

export function checkSchema(req, res, next) {
    const provideBody = orderSchema.safeParse(req.body);
    if (!provideBody.success) {
        res.status(400).json({
            success: false,
            error: "Check one of the fields you entered...",
        });
    }
    next();
}
