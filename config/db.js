const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "IronMan5499:)",
  database: "internship_db",
});

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to DB:", err);
  } else {
    console.log("Connected to DB");
  }
});

module.exports = connection;
