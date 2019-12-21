const express = require("express");
const dotenv = require("dotenv").config();

// routes
const bootcamps = require("./routes/bootcamp");

const app = express();
const morgan = require("morgan");

// logger
if (process.env.APP_ENV != "production") {
  app.use(morgan("dev"));
}
app.use("/api/v1/bootcamps", bootcamps);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
