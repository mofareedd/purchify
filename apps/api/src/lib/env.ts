import { z } from "zod";

const ServeEnv = z.object({
  PORT: z.string().default("3000").transform(Number),
  NODE_ENV: z.enum(["development", "production"]).default("development"),
});
const ProcessEnv = ServeEnv.parse(process.env);

export { ProcessEnv };
