const express = require("express");
const categoryRoutes = require("../routes/category.routes");
const app = express();
require("../db/connection");
app.use(express.json());

app.use("/api/categories", categoryRoutes);

module.exports = app;
