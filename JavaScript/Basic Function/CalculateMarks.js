// function CalculateMarks(engMarks, mathMarks, scienceMarks) {
//     let totalMarks = 0;
//     totalMarks = engMarks + mathMarks + scienceMarks;
//     let avgMarks = totalMarks / 3;
//     return  {total: totalMarks, average: avgMarks};
// }
// let x = CalculateMarks(85, 90, 78);//sample marks for English, Math and Science
// console.log(`Total Marks :${x.total} \nAverage Marks :${x.average.toFixed(2)}`);



function CalculateMarks(e, m, s) {
    let totalMarks = e + m + s;
    let avgMarks = totalMarks / 3;
    return { total: totalMarks, average: avgMarks };
}
let x = CalculateMarks(parseInt(prompt("Enter English marks:")), parseInt(prompt("Enter Math marks:")), parseInt(prompt("Enter Science marks:")));//sample marks for English, Math and Science
console.log(`Total Marks :${x.total} \nAverage Marks :${x.average.toFixed(2)}`);
