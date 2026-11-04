export function isLate(dueDate, submittedAt) {
    return submittedAt.getTime() > dueDate.getTime();
}
//# sourceMappingURL=dueDate.js.map