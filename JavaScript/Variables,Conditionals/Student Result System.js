let StudentName = prompt("Enter Student Name:");
let MathMarks = parseFloat(prompt("Enter Math Marks (out of 100):"));
let ScienceMarks = parseFloat(prompt("Enter Science Marks (out of 100):"));
let EnglishMarks = parseFloat(prompt("Enter English Marks (out of 100):"));
let TotalMarks = MathMarks + ScienceMarks + EnglishMarks;
let Average = (TotalMarks / 300) * 100;
console.log(`Student Name: ${StudentName}`);
console.log(`Total Marks: ${TotalMarks} out of 300`);
console.log(`Average: ${Average.toFixed(2)}%`);
if (Average >= 90) {
    console.log("Grade: A");
} else if (Average >= 75 && Average < 90) {
    console.log("Grade: B");
} else if (Average >= 60 && Average < 75) {
    console.log("Grade: C");
} else if (Average >= 45 && Average < 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}