import { expect, test } from "vitest";
import request from "supertest";
import { app } from "./server.js";

test("GET /courses returns courses", async () => {
  const response = await request(app).get("/courses");

  expect(response.status).toBe(200);
  expect(response.body).toHaveLength(3);
});

test("POST /enrolments accepts valid data", async () => {
  const response = await request(app)
    .post("/enrolments")
    .send({ studentId: 1, courseId: 1 });

  expect(response.status).toBe(201);
  expect(response.body.message).toBe("Enrolment successful");
});

test("POST /enrolments rejects invalid data", async () => {
  const response = await request(app)
    .post("/enrolments")
    .send({ studentId: 1, courseId: 999 });

  expect(response.status).toBe(400);
});