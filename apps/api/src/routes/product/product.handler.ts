import { db, productTable } from "@purchify/db";
import { Context, Handler } from "hono";
export const list: Handler = async (c) => {
  const products = await db.select().from(productTable);
  c.json(products);
};
