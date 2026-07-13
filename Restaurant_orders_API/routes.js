import express from "express";
import {
    readOrders,
    writeOrders,
    searchOrders,
    generateNewOrder,
} from "./dataHandling.js";
import { logger, checkSchema } from "./middlewares.js";
import { validateQuery } from "./validator.js";

export const ordersRouter = express.Router();
ordersRouter.use(express.json());
ordersRouter.use(logger);

ordersRouter.get("/get-all", async (req, res) => {
    const allOrders = await readOrders();
    res.json({ success: true, data: allOrders });
});

ordersRouter.get("/search", async (req, res) => {
    if (!validateQuery(req.query)) {
        return res.status(400).json({
            success: false,
            message: "queries most be only: 'status' | 'customer' | 'table",
        });
    }
    const orders = await searchOrders(req.query);
    res.json({ success: true, data: orders });
});

ordersRouter.get("/:id", async (req, res) => {
    const allOrders = await readOrders();
    const order = allOrders.find((order) => order.id === Number(req.params.id));
    res.json({ success: true, data: order });
});

ordersRouter.post("/new", checkSchema, async (req, res) => {
    const allOrders = await readOrders();
    const newOrder = await generateNewOrder(req.body, allOrders);
    allOrders.push(newOrder);
    await writeOrders(allOrders);
    res.status(201).json({ success: true, data: newOrder });
});
