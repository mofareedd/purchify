import { logger } from "hono/logger";
import { ProcessEnv } from "./lib/env";
import { db, productTable } from "@purchify/db";
import { Hono } from "hono";
import { businessRoute } from "./routes/business/business.route";

const app = new Hono();

app.use(logger());

const apiRoutes = app.basePath("/api").route("/business", businessRoute);

app.notFound((c) => {
  return c.json({ message: `route is not found - ${c.req.path}` }, 404);
});

app.onError((err, c) => {
  const currentStatus =
    "status" in err ? err.status : c.newResponse(null).status;
  const statusCode = currentStatus !== 200 ? currentStatus : 500;
  //   @ts-ignore

  console.log(err);
  return c.json({
    message: err.message,
    statusCode,
    // stack: ProcessEnv.NODE_ENV === "development" ? err.stack : "🤫",
  });
});

export { app };
