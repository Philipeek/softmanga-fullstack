const express = require("express");
const router = express.Router();

const healthController = require("../../controllers/healthController");
const demoController = require("../../controllers/demoController");
const mangaController = require("../../controllers/mangaController");

const userController = require("../../controllers/userController");

router.get("/users", userController.listUsers);
router.get("/users/:id", userController.getUser);


router.get("/health", healthController.healthCheck);
router.get("/error-demo", demoController.throwDemoError);

router.get("/mangas", mangaController.listMangas);
router.get("/mangas/:id", mangaController.getManga);

module.exports = router;
