"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_connection_string_1 = require("pg-connection-string");
exports.default = ({ env }) => {
    const connectionString = env('DATABASE_URL');
    if (!connectionString) {
        return {
            connection: {
                client: 'postgres',
                connection: {
                    host: env('DATABASE_HOST', 'localhost'),
                    port: env.int('DATABASE_PORT', 5432),
                    database: env('DATABASE_NAME', 'strapi'),
                    user: env('DATABASE_USERNAME', 'strapi'),
                    password: env('DATABASE_PASSWORD', 'strapi'),
                    ssl: env.bool('DATABASE_SSL', false) ? { rejectUnauthorized: false } : false,
                },
            },
        };
    }
    const parsed = (0, pg_connection_string_1.parse)(connectionString);
    return {
        connection: {
            client: 'postgres',
            connection: {
                host: parsed.host,
                port: parsed.port ? parseInt(parsed.port, 10) : 5432,
                database: parsed.database,
                user: parsed.user,
                password: parsed.password,
                ssl: env.bool('DATABASE_SSL', true) ? { rejectUnauthorized: false } : false,
            },
            pool: {
                min: env.int('DATABASE_POOL_MIN', 2),
                max: env.int('DATABASE_POOL_MAX', 10),
            },
        },
    };
};
