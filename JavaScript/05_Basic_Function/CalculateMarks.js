function calculateMarks(subject1, subject2, subject3) {
  return (subject1 + subject2 + subject3) / 3;
}

const average = calculateMarks(85, 90, 78);
console.log(`Average marks: ${average}`);