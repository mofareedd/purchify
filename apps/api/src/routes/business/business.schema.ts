// export const businessTable = pgTable("business", (t) => ({
//     id: t.uuid("id").primaryKey().defaultRandom(),
//     name: t.varchar("name", { length: 255 }).notNull(),
//     description: t.varchar("address", { length: 255 }),
//     address: t.varchar("address", { length: 255 }),
//     phone: t.varchar("phone", { length: 20 }),
//     email: t.varchar("email", { length: 255 }),
//     createdAt: t.timestamp("created_at").defaultNow(),
//   }));

import { z } from "zod";

export const createBusinessInput = z.object({
  name: z.string(),
  description: z.string().optional(),
  address: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email(),
});

export type CreateBusinessInputType = z.infer<typeof createBusinessInput>;
