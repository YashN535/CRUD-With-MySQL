const Employee = require("../models/employeeModel");

// Create employee
exports.createEmployees = (req, res) => {
  const data = req.body;
  if (req.file) {
    data.profilePic = req.file.filename;
    data.gender = req.body.gender;
  }
  Employee.insertEmployees(data, (err, result) => {
    if (err) res.status(500).send(err);
    else res.status(201).send("Employee created");
  });
};

// Update employee
exports.updateEmployees = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  if (req.file) {
    data.profilePic = req.file.filename;
    data.gender = req.body.gender;
  }
  Employee.updateEmployees(id, data, (err, result) => {
    if (err) res.status(500).send(err);
    else res.send("Employee updated");
  });
};

// Delete employee
exports.deleteEmployees = (req, res) => {
  const id = req.params.id;
  Employee.deleteEmployees(id, (err, result) => {
    if (err) res.status(500).send(err);
    else res.send("Employee deleted");
  });
};

// List and filter employees
exports.listEmployees = (req, res) => {
  const filter = req.query.filter || "";
  Employee.listEmployees(filter, (err, results) => {
    if (err) res.status(500).send(err);
    else res.json(results);
  });
};
