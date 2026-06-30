console.log("requestLogger.js loaded");

const logger = require("./logger");

module.exports = (req, res, next) => {
    logger.info(`${req.method} ${req.originalUrl} from ${req.ip}`);
    next();
};