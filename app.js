const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const employeeRoutes = require("./routes/employeeRoutes");
require("dotenv").config();
app.use(express.json());

app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

// Employee API Routes

app.use("/api", employeeRoutes);

// Start server
app.listen(4000, () => {
  console.log("Server listning at http://127.0.0.1:4000");
});
