const express = require("express");
const cors = require("cors");

const requestLogger = require("./middleware/requestLogger");
const notificationRoutes = require("./routes/notificationRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.use("/notifications", notificationRoutes);

module.exports = app;