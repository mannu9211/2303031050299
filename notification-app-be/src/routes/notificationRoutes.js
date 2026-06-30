const express = require("express");

const router = express.Router();

const notifications = [
    {
        id: "1",
        studentId: "2303031050299",
        type: "Placement",
        message: "Google Hiring",
        priority: 1,
        isRead: false,
        createdAt: new Date()
    },
    {
        id: "2",
        studentId: "2303031050299",
        type: "Result",
        message: "Mid Semester Result",
        priority: 2,
        isRead: false,
        createdAt: new Date()
    }
];

// Get all notifications
router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        count: notifications.length,
        notifications
    });
});

// Get notification by ID
router.get("/:id", (req, res) => {

    const notification = notifications.find(
        n => n.id === req.params.id
    );

    if (!notification) {
        return res.status(404).json({
            success: false,
            message: "Notification not found"
        });
    }

    res.json({
        success: true,
        notification
    });

});

// Mark notification as read
router.patch("/:id/read", (req, res) => {

    const notification = notifications.find(
        n => n.id === req.params.id
    );

    if (!notification) {
        return res.status(404).json({
            success: false,
            message: "Notification not found"
        });
    }

    notification.isRead = true;

    res.json({
        success: true,
        message: "Notification marked as read"
    });

});

module.exports = router;