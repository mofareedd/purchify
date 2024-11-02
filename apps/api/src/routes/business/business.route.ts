import { Hono } from "hono";
import { createBusinessInput } from "./business.schema";
import { zValidator } from "@hono/zod-validator";
import { businessTable, db } from "@purchify/db";

const businessRoute = new Hono();

businessRoute
  .get("/", async (c) => {
    const business = await db.select().from(businessTable);

    return c.json(business);
  })
  .post("/", zValidator("json", createBusinessInput), async (c) => {
    const businessInput = c.req.valid("json");

    await db.insert(businessTable).values(businessInput);

    c.json({ message: "business created!" }, 200);
  });

export { businessRoute };
