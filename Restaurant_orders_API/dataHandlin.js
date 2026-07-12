import fs from "fs/promises";

const FILE_PATH = "./orders.json";

export async function readOrders() {
    const orders = await fs.readFile(FILE_PATH, "utf8");
    return JSON.parse(orders);
}

export async function writeOrders(data) {
    const dataString = JSON.stringify(data, null, 2);
    await fs.writeFile(FILE_PATH, data, "utf8");
}
