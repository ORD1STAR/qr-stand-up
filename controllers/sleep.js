const scleepSchedule = require("../models/scleepSchedule.js");
const Sleep = require("../models/scleepSchedule.js");
const User = require("../models/user.js");

const createSleep = async (req, res) => {
  try {
    const { id, startTime, endTime } = req.body;
    const schedule = new Sleep({ startTime, endTime });
    await schedule.save();

    const user = await User.findByIdAndUpdate(
      id,
      { $push: { sleepSchedule: [schedule._id] } },
      { new: true }
    );
    res.status(200).json({ user, schedule });
  } catch (error) {
    res.status(400).json({ message: "erroe", error: error.message });
  }
};

module.exports = {
  createSleep,
};
