export function isLate(dueDate: Date, submittedAt: Date): boolean {
  return submittedAt.getTime() > dueDate.getTime();
} 
