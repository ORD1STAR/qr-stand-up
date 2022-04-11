const mongoose = require("mongoose");

exports.connect = async () => {
  await mongoose.connect(process.env.mongodb_url);
};
