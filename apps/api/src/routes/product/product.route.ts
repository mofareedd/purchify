import { createRoute } from "@hono/zod-openapi";
import { Hono } from "hono";
import { validator } from "hono/validator";
import { list } from "./product.handler";

const productRoute = new Hono();

productRoute.get("/", list);
productRoute.post(
  "/",
  validator("json", (value, c) => {
    // const parsed =
  })
);
