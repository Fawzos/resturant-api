const express = require("express");
const categoryRoutes = require("../routes/category.routes");
const app = express();
require("../db/connection");
app.use(express.json());

app.use("/api/category", categoryRoutes);

module.exports = app;
