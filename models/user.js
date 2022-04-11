const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
  },

  Password: {
    type: String,
    required: true,
  },
  sleepSchedule: [
    {
      type: mongoose.Types.ObjectId,
      ref: "SleepSchedule",
      required: true,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
