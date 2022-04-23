const express = require("express");
const categoryRoutes = require("../routes/category.routes");
const menuesRoutes = require("../routes/menue.routes");
const app = express();
require("../db/connection");
app.use(express.json());

app.use("/api/categories", categoryRoutes);
app.use("/api/menues", menuesRoutes);

module.exports = app;
