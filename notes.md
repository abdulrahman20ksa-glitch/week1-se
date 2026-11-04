# Week 1 - Software Engineering API Notes

## Project
Course Enrolment API using Node.js, Express and TypeScript.

## Base URL
http://localhost:3000

## API Endpoints

### 1. GET /courses
Returns the list of available courses.

Example:
GET http://localhost:3000/courses

Success response: 200 OK

### 2. POST /enrolments
Registers a student in a course.

Example request:
POST http://localhost:3000/enrolments

Request body:
{
  "studentId": 1,
  "courseId": 1
}

Success response: 201 Created

### 3. Validation
The API validates studentId and courseId.

Invalid data returns:
400 Bad Request

## Testing
API endpoints tested using Vitest and Supertest.

## Frontend
React displays courses, supports searching,
and allows students to enrol.