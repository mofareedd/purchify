import { z } from "zod";
import { app } from "./app";
import { ProcessEnv } from "./lib/env";

const server = Bun.serve({
  port: ProcessEnv.PORT,
  fetch: app.fetch,
});

console.log(`Server is running on port http://localhost:${server.port}...`);
