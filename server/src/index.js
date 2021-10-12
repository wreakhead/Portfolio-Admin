const express = require("express");
const getData = require("./getData");
const admin = require("./admin");
const editData = require("./editData");
const myErrorLogger = require("./utilities/errorlogger");
const myRequestLogger = require("./utilities/requestlogger");
const cors = require("cors");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");

const PORT = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());
app.use(myRequestLogger);
app.use(helmet());
app.use(morgan("common"));
app.use("/data", getData);
app.use("/admin", admin);
app.use("/update", editData);
app.use(myErrorLogger);

app.get("/", (req, res) => {
  res.send("server started");
});

app.listen(PORT, () => {
  console.log("server started at 7000");
});

module.exports = app;
