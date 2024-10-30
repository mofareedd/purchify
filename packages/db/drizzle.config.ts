import "dotenv/config";
import { defineConfig } from "drizzle-kit";

if (!process.env.POSTGRES_URL) {
  throw new Error("POSGRES_URL Environment variables is not found!");
}

export default defineConfig({
  schema: "./src/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL,
  },
  casing: "snake_case",
});
