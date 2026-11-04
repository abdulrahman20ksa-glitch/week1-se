import { expect, test } from "vitest";
import { isLate } from "./dueDate.js";
test("Submission before deadline is not late", () => {
    const dueDate = new Date("2026-11-10");
    const submittedAt = new Date("2026-11-09");
    expect(isLate(dueDate, submittedAt)).toBe(false);
});
test("Submission after deadline is late", () => {
    const dueDate = new Date("2026-11-10");
    const submittedAt = new Date("2026-11-11");
    expect(isLate(dueDate, submittedAt)).toBe(true);
});
//# sourceMappingURL=dueDate.test.js.map