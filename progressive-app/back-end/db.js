const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "TCGPC1",
  host: "localhost",
  port: 5432,
  database: "takeabunch",
});

module.exports = pool;
