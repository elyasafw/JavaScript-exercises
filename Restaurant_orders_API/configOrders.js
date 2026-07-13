import z from "zod";

const itemsSchema = z.object({
    name: z.string(),
    price: z.number(),
});

export const orderSchema = z.object({
    customer: z.string(),
    table: z.number().int().positive(),
    items: z.array(itemsSchema),
});
