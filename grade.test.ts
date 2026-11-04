import { expect, test } from "vitest";
import { calculateGrade } from "./grade.ts";test("Grade 85 should be B", () => {
  const result = calculateGrade(85, 100);

  expect(result.percentage).toBe(85);
  expect(result.letter).toBe("B");
});  

test("Grade 95 should be A", () => {
  expect(calculateGrade(95, 100).letter).toBe("A");
});

test("Grade 75 should be C", () => {
  expect(calculateGrade(75, 100).letter).toBe("C");
});

test("Grade 65 should be D", () => {
  expect(calculateGrade(65, 100).letter).toBe("D");
});

test("Grade 45 should be F", () => {
  expect(calculateGrade(45, 100).letter).toBe("F");
}); 