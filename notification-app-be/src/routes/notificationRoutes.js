const express = require("express");

const router = express.Router();

const controller = require("../controllers/notificationController");

router.get("/", controller.getAllNotifications);

router.get("/:id", controller.getNotificationById);

router.patch("/:id/read", controller.markRead);

module.exports = router;