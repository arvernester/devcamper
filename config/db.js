const mongoose = require("mongoose");
const dotEnv = require("dotenv").config();
const colors = require("colors");

const connectDb = async () => {
  const conn = await mongoose.connect(process.env.MONGO_HOST, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });

  console.log(`MongoDB connected: ${conn.connection.host}`.green.underline);
};

module.exports = connectDb;
