
import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const chats = pgTable('chats', {
    id: serial('id').primaryKey(),
    pdfName: text('pdf_name').notNull(),
    pdfUrl: text('pdf_url').notNull(),
    createdAt: timestamp('created_At').notNull().defaultNow(),
    userId: varchar('userId', {length: 256}).notNull(),
    fileKey: text('file_key').notNull()
})