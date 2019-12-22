const mongoose = require("mongoose");
const dotEnv = require("dotenv").config();

const connectDb = async () => {
  const conn = await mongoose.connect(process.env.MONGO_HOST, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });

  console.log(`MongoDB connected: ${conn.connection.host}`);
};

module.exports = connectDb;
