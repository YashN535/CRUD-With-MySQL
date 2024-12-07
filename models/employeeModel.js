const db = require("../config/db");

// Insert employee
exports.insertEmployees = (data, callback) => {
  const query = `INSERT INTO employees SET ?`;
  db.query(query, data, callback);
};

// Update employee
exports.updateEmployees = (id, data, callback) => {
  const query = `UPDATE employees SET ? WHERE id = ?`;
  db.query(query, [data, id], callback);
};

// Delete employee
exports.deleteEmployees = (id, callback) => {
  const query = `DELETE FROM employees WHERE id = ?`;
  db.query(query, [id], callback);
};

// List and filter employees
exports.listEmployees = (filter, callback) => {
  const query = `SELECT * FROM employees WHERE name LIKE ? OR email LIKE ? OR phone_number LIKE ?`;
  db.query(query, [`%${filter}%`, `%${filter}%`, `%${filter}%`], callback);
};
