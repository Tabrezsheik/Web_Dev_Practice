// Student Database (Nested Arrays) 
// Features:
// Print student name
// Print marks
// Add student
// Remove student


let students = [
  ["Tabrez", 80],
  ["Ali", 75],
  ["John", 90]
];

console.log(students[0][0]); // Print student name
console.log(students[0][1]); // Print marks
students.push(["Rahul", 85]); // Add student
console.log(students);
students.splice(1, 1); // Remove student
console.log(students);

