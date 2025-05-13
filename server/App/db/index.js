const mongoose = require("mongoose");
const { DB_URL } = require("../../config");

const dbConnection = () => {
  try {
    const conn = mongoose.connect(DB_URL);
    console.log(`Database connected successfully!`);
  } catch (error) {
    console.log(`Error while connecting database! ${error}`);
  }
};

module.exports = dbConnection;
