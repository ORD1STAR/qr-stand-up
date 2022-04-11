const mongoose = require("mongoose");

const sleepSchedule = new mongoose.Schema({
  startTime: {
    type: String,
    default: new Date(),
  },
  endTime: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("SleepSchedule", sleepSchedule);
