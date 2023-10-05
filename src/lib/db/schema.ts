import {
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  integer,
  pgEnum,
} from "drizzle-orm/pg-core";

export const userSystemEnum = pgEnum("user_system_enum", ["system", "user"]);

export const chats = pgTable("chats", {
  id: serial("id").primaryKey(),
  pdfName: text("pdf_name").notNull(),
  pdfUrl: text("pdf_url").notNull(),
  createdAt: timestamp("created_At").notNull().defaultNow(),
  userId: varchar("userId", { length: 256 }).notNull(),
  fileKey: text("file_key").notNull(),
});

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  chatId: integer("chat_id")
    .references(() => chats.id)
    .notNull(), //refering to the chats schema above
  content: text("content").notNull(),
  createdAt: timestamp("created_At").notNull().defaultNow(),
  role: userSystemEnum("role").notNull(), // userSystemEnum above. Enum is a datatype used to define a column in a database table where the values for that column must be one of the specified options.
});

// drizzle-kit-package: We use drizzle-kit to sync these schema with out database(npm i drizzle-kit).
// configuration of drizzle-kit can be find in drizzle.config.ts