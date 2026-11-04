const score = 85; 
console.log(score);
const total = 100;
const percentage = (score / total) * 100;
console.log(percentage);
let letter: string;

if (percentage >= 90) {
  letter = "A";
} else if (percentage >= 80) {
  letter = "B";
} else if (percentage >= 70) {
  letter = "C";
} else if (percentage >= 60) {
  letter = "D";
} else {
  letter = "F";
}

console.log(letter); 
console.log(letter);


export function calculateGrade(score: number, total: number) {  const percentage = (score / total) * 100;
const letter = percentage >= 90 ? "A" : percentage >= 80 ? "B" : percentage >= 70 ? "C" : percentage >= 60 ? "D" : "F";

return { percentage, letter }; 
}
console.log(calculateGrade(85, 100)); 
