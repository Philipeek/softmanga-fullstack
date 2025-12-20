const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "demo_user",
    password: "demo_password",
    database: "softmanga_demo",
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
});

pool.on("connect", () => {
    console.log("PostgreSQL connected (demo pool)");
});

module.exports = pool;
