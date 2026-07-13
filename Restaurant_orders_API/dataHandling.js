import fs from "fs/promises";

const FILE_PATH = "./orders.json";

export async function readOrders() {
    const orders = await fs.readFile(FILE_PATH, "utf8");
    return JSON.parse(orders);
}

export async function writeOrders(data) {
    const dataString = JSON.stringify(data, null, 4);
    await fs.writeFile(FILE_PATH, dataString, "utf8");
}

export async function searchOrders(query) {
    const { status, customer, table } = query;
    const allOrders = await readOrders();
    const filtered = allOrders.filter((order) => {
        return [
            !status || order.status.toLowerCase() === status.toLowerCase(),
            !customer ||
                order.customer.toLowerCase() === customer.toLowerCase(),
            !table || order.table === Number(table),
        ].every((condition) => condition == true);
    });
    return filtered;
}

export async function generateNewOrder(order, allOrders) {
    let nextId = 100;
    if (allOrders.length > 0) {
        const lastOrder = allOrders[allOrders.length - 1];
        nextId = Number(lastOrder.id) + 1;
    }
    return {
        id: nextId,
        customer: order.customer,
        table: order.table,
        status: "NEW",
        items: order.items,
    };
}
