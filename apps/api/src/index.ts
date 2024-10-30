import { Hono } from "hono";
import { db } from "@purchify/db/client";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
