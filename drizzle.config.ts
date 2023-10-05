import {Config} from 'drizzle-kit';

// We will install npm i dotenv to avail the env variable outside the src folder. It won't be available otherwise.
import * as dotenv from 'dotenv';
dotenv.config({ path: ".env" });

export default {
    driver: 'pg',
    schema: './src/lib/db/schema.ts',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL!,
    },
} satisfies Config

// To push the schema into database:
// npx drizzle-kit push:pg

// To show the database, npx drizzle-kit studio --host 127.0.0.1(Before that 'npm i pg')