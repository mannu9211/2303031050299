const logger = require("../middleware/logger");

const notificationQueue = [];

function addNotificationJob(job) {
    notificationQueue.push(job);

    logger.info(`Job queued for ${job.studentId}`);
}

function processQueue() {

    while (notificationQueue.length > 0) {

        const job = notificationQueue.shift();

        logger.info(
            `Sending notification to ${job.studentId}`
        );

        // Simulate sending notification
    }

}

module.exports = {
    addNotificationJob,
    processQueue
};