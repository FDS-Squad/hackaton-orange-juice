export default {
  port: process.env.PORT ?? 3333,
  databaseUrl:
    process.env.DATABASE_URL ??
    'postgresql://admin:admin@localhost:54320/database?schema=public',
};
