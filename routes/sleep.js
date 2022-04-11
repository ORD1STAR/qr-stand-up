const router = require("express").Router();
const { createSleep } = require("../controllers/sleep.js");
router.post("/", createSleep);
/*
router.all("/:id").get().put("").delete("");

*/
module.exports = router;
