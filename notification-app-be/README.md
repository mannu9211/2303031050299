## Notification App Backend
# Notification App Backend

Backend implementation for the Campus Hiring Evaluation.

---

## Tech Stack

- Node.js
- Express.js
- CORS
- JavaScript

---

## Project Structure

```
src/
├── controllers
├── data
├── middleware
├── routes
├── services
├── app.js
└── server.js
```

---

## APIs

### GET

```
/notifications
```

Returns all notifications.

---

### GET

```
/notifications/:id
```

Returns notification by id.

---

### PATCH

```
/notifications/:id/read
```

Marks notification as read.

---

### PATCH

```
/notifications/read-all
```

Marks all notifications as read.

---

### GET

```
/notifications/priority
```

Returns top priority notifications.

---

### POST

```
/notifications/broadcast
```

Broadcast notification to all students.

---

## Running Project

Install

```bash
npm install
```

Start

```bash
npm run dev
```

---

## Folder Structure

```
src
│
├── controllers
├── routes
├── services
├── middleware
├── data
```

---

## Features

- REST APIs
- Logging Middleware
- Priority Inbox
- Read / Unread Notifications
- Broadcast Notifications
- Modular Architecture