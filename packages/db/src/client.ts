import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";
const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
  ssl: true,
});

const db = drizzle({ client: pool, schema, casing: "snake_case" });
export { db };
