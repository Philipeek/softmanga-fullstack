const express = require("express");
const router = express.Router();
const requireAuth = require("../../middlewares/authMiddleware");

router.get("/me", requireAuth, (req, res) => {
    res.json({
        data: {
            user: req.user
        }
    });
});

router.get("/", (req, res) => {
    res.send("Welcome to the SoftManga Demo Site Backend");
});

module.exports = router;
