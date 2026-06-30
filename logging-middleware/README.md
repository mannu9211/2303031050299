## Logging Middleware
# Logging Middleware

## Objective

This middleware logs every incoming HTTP request into a log file.

---

## Features

- Request Method
- URL
- IP Address
- Timestamp
- Log Levels

---

## Structure

middleware/

- logger.js
- requestLogger.js

logs/

- app.log

---

## Example Log

```text
[2026-06-30T09:30:21.122Z] [INFO] GET /notifications from ::1
```

---

## Technologies

- Node.js
- Express
- File System (fs)

---

## Flow

Client

↓

Express

↓

Request Logger

↓

app.log

---

Benefits

- Debugging
- Monitoring
- Request Tracking