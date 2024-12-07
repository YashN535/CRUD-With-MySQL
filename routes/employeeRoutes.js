const express = require("express");
const multer = require("multer");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
const db = require("../config/db");

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage: storage });

// Routes for CRUD operations
router.post(
  "/employees",
  upload.single("profilePic"),
  employeeController.createEmployees
);
router.put(
  "/employees/:id",
  upload.single("profilePic"),
  employeeController.updateEmployees
);

// Delete employee route

router.delete("/employees/:id", employeeController.deleteEmployees);
router.get("/employees", employeeController.listEmployees);

module.exports = router;
