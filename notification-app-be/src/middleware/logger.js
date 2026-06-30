const fs = require("fs");
const path = require("path");

const logDir = path.join(__dirname, "../../logs");

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const logFile = path.join(logDir, "app.log");

function writeLog(level, message) {
    const time = new Date().toISOString();

    const log = `[${time}] [${level}] ${message}\n`;

    fs.appendFileSync(logFile, log);
}

module.exports = {
    info: (msg) => writeLog("INFO", msg),
    error: (msg) => writeLog("ERROR", msg),
    warn: (msg) => writeLog("WARN", msg)
};