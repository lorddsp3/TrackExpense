// server/db.js
// MySQL Database Connection

const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "expense_tracker",

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test database connection
async function testConnection() {
  try {
    const connection = await db.getConnection();

    console.log("MySQL Database Connected Successfully!");

    connection.release();
    return true;
  } catch (error) {
    console.error("MySQL Connection Failed:", error.message);
    return false;
  }
}

// Execute SQL queries
async function executeQuery(sql, values = []) {
  try {
    const [results] = await db.execute(sql, values);
    return results;
  } catch (error) {
    console.error("Database Query Error:", error.message);
    throw error;
  }
}

module.exports = {
  db,
  testConnection,
  executeQuery,
};
