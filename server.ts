import express from "express";

export const app = express();
app.use(express.json());

const courses = [
  { id: 1, title: "Software Engineering" },
  { id: 2, title: "TypeScript Basics" },
  { id: 3, title: "Web Development" }
];

const enrolments: { studentId: number; courseId: number }[] = [];

// Get all courses
app.get("/courses", (_req, res) => {
  res.json(courses);
});

// Enrol a student in a course
app.post("/enrolments", (req, res) => {
  const { studentId, courseId } = req.body ?? {};

  if (
    !Number.isInteger(studentId) ||
    studentId <= 0 ||
    !Number.isInteger(courseId) ||
    !courses.some(course => course.id === courseId)
  ) {
    res.status(400).json({ error: "Invalid studentId or courseId" });
    return;
  }

  enrolments.push({ studentId, courseId });
  res.status(201).json({
    message: "Enrolment successful",
    studentId,
    courseId
  });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(3000, () => {
    console.log("API running at http://localhost:3000");
  });
} 