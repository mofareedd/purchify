import { pgEnum, pgTable } from "drizzle-orm/pg-core";

//  Business Table
export const businessTable = pgTable("business", (t) => ({
  id: t.uuid("id").primaryKey().defaultRandom(),
  name: t.varchar("name", { length: 255 }).notNull(),
  description: t.varchar("address", { length: 255 }),
  address: t.varchar("address", { length: 255 }),
  phone: t.varchar("phone", { length: 20 }),
  email: t.varchar("email", { length: 255 }),
  createdAt: t.timestamp("created_at").defaultNow(),
}));

// Product Table
export const productTable = pgTable("product", (t) => ({
  id: t.uuid("id").primaryKey().defaultRandom(),
  businessId: t.uuid("business_id").references(() => businessTable.id),
  name: t.varchar("name", { length: 255 }).notNull(),
  sku: t.varchar("sku", { length: 50 }).notNull(),
  price: t.numeric("price", { precision: 10, scale: 2 }).notNull(),
  quantity: t.integer("quantity").default(0),
  images: t.json().$type<{
    id: string;
    name: string;
    url: string;
  }>(),
  description: t.varchar("description", { length: 1000 }),
  createdAt: t.timestamp("created_at").defaultNow(),
  updatedAt: t.timestamp("updated_at").defaultNow(),
}));

// Customer Table
export const customerTable = pgTable("customer", (t) => ({
  id: t.uuid("id").primaryKey().defaultRandom(),
  businessId: t.uuid("business_id").references(() => businessTable.id),
  name: t.varchar("name", { length: 255 }).notNull(),
  email: t.varchar("email", { length: 255 }),
  phone: t.varchar("phone", { length: 20 }),
}));

//  Sale Table
export const saleTable = pgTable("sale", (t) => ({
  id: t.uuid("id").primaryKey().defaultRandom(),
  businessId: t.uuid("business_id").references(() => businessTable.id),
  totalAmount: t.numeric("total_amount", { precision: 10, scale: 2 }).notNull(),
  discount: t.numeric("discount", { precision: 10, scale: 2 }),
  tax: t.numeric("tax", { precision: 10, scale: 2 }),
  createdAt: t.timestamp("created_at").defaultNow(),
  customerId: t.uuid("customer_id").references(() => customerTable.id),
  userId: t.varchar().notNull(),
}));

export const saleItemTable = pgTable("sale_item", (t) => ({
  id: t.uuid("id").primaryKey().defaultRandom(),
  saleId: t.uuid("sale_id").references(() => saleTable.id),
  productId: t.uuid("product_id").references(() => productTable.id),
  quantity: t.numeric("quantity").notNull(),
  price: t.numeric("price").notNull(), // Price at the time of sale
}));
