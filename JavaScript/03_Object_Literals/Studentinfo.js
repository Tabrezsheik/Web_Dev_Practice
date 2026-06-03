const student = {
  name: "Tabrez",
  age: 20,
  city: "Ananthapur",

  marks: {
    maths: 80,
    science: 75
  }
};

// Print normal values
console.log(`${student["name"]} is ${student["age"]} years old and lives in ${student["city"]}.`)



// Add new subject
// Print nested object values
console.log(`Maths Marks: ${student.marks.maths}`);
console.log(`Science Marks: ${student["marks"]["science"]}`);

student.marks.english = 85;
// Update maths marks
student.marks.maths = 90;
// add new subject
student.marks["history"] = 70;

// Print the entire marks object
 console.log(student.marks);
 // Calculate total marks
let total =
  student.marks.maths +
  student.marks.science +
  student.marks.english + student.marks.history;
 

console.log(`Total Marks: ${total}`);
