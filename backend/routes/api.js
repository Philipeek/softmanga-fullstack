const express = require("express");
const router = express.Router();

router.get("/status", (req, res) => {
    res.json({ status: "ok", message: "API is running (demo version)" });
});

module.exports = router;
