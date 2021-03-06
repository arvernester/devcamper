const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/db");

// connect to database
connectDb();

// routes
const bootcamps = require("./routes/bootcamp");

const app = express();
const morgan = require("morgan");

// body parser
app.use(express.json());

// logger
if (process.env.APP_ENV != "production") {
  app.use(morgan("dev"));
}
app.use("/api/v1/bootcamps", bootcamps);

const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`App listening on port ${port}!`.yellow.bold);
});

// handle undhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);

  // close server and exit process
  server.close(() => process.exit(1));
});
