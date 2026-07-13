import express from "express";
import { ordersRouter } from "./routes.js";

const app = express();

app.use("/orders", ordersRouter);

app.listen(3030, () => console.log("Orders app running on port 3030 ..."));
