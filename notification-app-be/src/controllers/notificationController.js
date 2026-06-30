const notifications = require("../data/notifications.js");

exports.getAllNotifications = (req, res) => {
  res.status(200).json({
    success: true,
    count: notifications.length,
    notifications,
  });
};

exports.getNotificationById = (req, res) => {
  const notification = notifications.find(
    (n) => n.id === req.params.id
  );

  if (!notification) {
    return res.status(404).json({
      success: false,
      message: "Notification not found",
    });
  }

  res.json({
    success: true,
    notification,
  });
};

exports.markRead = (req, res) => {
  const notification = notifications.find(
    (n) => n.id === req.params.id
  );

  if (!notification) {
    return res.status(404).json({
      success: false,
      message: "Notification not found",
    });
  }

  notification.isRead = true;

  res.json({
    success: true,
    notification,
  });
};