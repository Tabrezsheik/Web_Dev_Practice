const StudentsOfA = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 72 },
  { name: 'David', grade: 90 },
];

// Check if every student has a grade above 80
const allAbove80 = StudentsOfA.every(student => student.grade > 80);
console.log(`All students of Class A have a grade above 80: ${allAbove80}`);

const StudentsOfB = [
  { name: 'Eve', grade: 90 },
  { name: 'Frank', grade: 88 },
  { name: 'Grace', grade: 95 },
  { name: 'Heidi', grade: 91 },
];
// Check if some students have a grade above 80
const someAbove80 = StudentsOfB.every(student => student.grade > 80);
console.log(`All students of Class B have a grade above 80: ${someAbove80}`);


//example of some
const StudentsOfC = [
  { name: 'Ivan', grade: 75 },
    { name: 'Judy', grade: 82 },
    { name: 'Karl', grade: 78 },
    { name: 'Leo', grade: 80 },
];
// Check if some students have a grade above 80
const someAbove80InC = StudentsOfC.some(student => student.grade > 80);
console.log(`Some students of Class C have a grade above 80: ${someAbove80InC}`);