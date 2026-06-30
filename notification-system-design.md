# Notification System Design
# Notification System Design

## Stage 1 – REST API Design

### API Endpoints

### Get Notifications

GET /notifications

Response

```json
{
  "success": true,
  "notifications": []
}
```

---

### Get Notification By ID

GET /notifications/:id

Response

```json
{
  "success": true,
  "notification": {}
}
```

---

### Mark Notification as Read

PATCH /notifications/:id/read

Response

```json
{
  "success": true,
  "message": "Notification marked as read"
}
```

---

### Mark All Notifications as Read

PATCH /notifications/read-all

---

### Broadcast Notification

POST /notifications/broadcast

Body

```json
{
  "message":"Placement Drive Tomorrow"
}
```

---

### Headers

Content-Type: application/json

Authorization: Bearer <token>

---

## Notification Schema

```json
{
"id":"string",
"studentId":"string",
"type":"Placement | Result | Event",
"message":"string",
"isRead":false,
"priority":1,
"createdAt":"ISO Date"
}
```

---

# Stage 2 – Database Design

## Suggested Database

PostgreSQL

Reason

- ACID Transactions
- Structured Data
- Index Support
- High Performance

---

## Table

Notifications

| Column | Type |
|---------|------|
| id | UUID |
| studentId | VARCHAR |
| type | VARCHAR |
| message | TEXT |
| priority | INTEGER |
| isRead | BOOLEAN |
| createdAt | TIMESTAMP |

---

## Indexes

(studentId)

(studentId,isRead)

(studentId,createdAt DESC)

(type)

---

# Stage 3 – Query Optimization

Current Query

```sql
SELECT *
FROM notifications
WHERE studentId=1042
AND isRead=false
ORDER BY createdAt ASC;
```

Problem

- Full table scan
- Sorting is expensive
- Millions of rows

Solution

Composite Index

```sql
(studentId,isRead,createdAt)
```

Optimized Query Cost

O(log n)

---

# Stage 4 – Scaling

Problems

- Returning all notifications
- High bandwidth
- Slow API
- High DB Load

Solutions

- Pagination
- Infinite Scroll
- Redis Cache
- Background Workers
- Filtering

Benefits

- Faster API
- Lower DB Load
- Better UX

---

# Stage 5 – Notification Delivery

Current

Sequential Processing

Improved

Queue Based Processing

Architecture

API

↓

Queue

↓

Workers

↓

Students

Technologies

- BullMQ
- Redis
- RabbitMQ

Reliability

- Retry Mechanism
- Dead Letter Queue
- Idempotency

---

# Stage 6 – Priority Inbox

Priority Order

1. Placement
2. Result
3. Event

Algorithm

- Sort by Priority
- Sort by Latest Timestamp
- Return Top 10

Complexity

Sorting

O(n log n)

Top 10

O(10)

---

Advantages

- Fast
- Scalable
- Easy to Extend