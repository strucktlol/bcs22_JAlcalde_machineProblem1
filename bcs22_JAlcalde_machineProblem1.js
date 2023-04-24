// ITCS227 Source Code Template for 2T AY 2022-2033
/*
    Program:     Computation of Grades using Function
    Programmer: Jose Antonio L. Alclade
    Section: BCS22
    Start Date:April 17, 2023
    End Date: April 25,2034
*/

let students = [];
for (let i = 0; i < 5; i++) {
  let student = {};
  student.name = prompt(`Enter the name of student ${i + 1}: `);
  student.enablingAssessments = [];
  for (let j = 0; j < 5; j++) {
    let enablingAssessment = parseFloat(prompt(`Enter the enabling assessment ${j + 1} for ${student.name}: `));
    student.enablingAssessments.push(enablingAssessment);
  }
  let enablingAssessmentAvg = student.enablingAssessments.reduce((acc, curr) => acc + curr, 0) / student.enablingAssessments.length;
  student.enablingAssessmentAvg = enablingAssessmentAvg;
  student.summativeAssessments = [];
  for (let j = 0; j < 3; j++) {
    let summativeAssessment = parseFloat(prompt(`Enter the summative assessment ${j + 1} for ${student.name}: `));
    student.summativeAssessments.push(summativeAssessment);
  }
  let summativeAssessmentAvg = student.summativeAssessments.reduce((acc, curr) => acc + curr, 0) / student.summativeAssessments.length;
  student.summativeAssessmentAvg = summativeAssessmentAvg;
  student.examGrade = parseFloat(prompt(`Enter the major exam grade for ${student.name}: `));
  student.finalGrade = student.enablingAssessmentAvg * 0.3 + student.summativeAssessmentAvg * 0.3 + student.examGrade * 0.4;
  let letterGrade;
  if (student.finalGrade >= 90) {
    letterGrade = "A";
  } else if (student.finalGrade >= 80) {
    letterGrade = "B";
  } else if (student.finalGrade >= 70) {
    letterGrade = "C";
  } else if (student.finalGrade >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }
  student.finalGrade = Math.ceil(student.finalGrade);
  student.letterGrade = letterGrade;
  students.push(student);
}

console.log("Name of Student           Class Participation  Summative Assessment  Exam Grade  Grade Score  Letter Grade");
for (let i = 0; i < students.length; i++) {
  let student = students[i];
  console.log(`${student.name.padEnd(16)} ${student.enablingAssessmentAvg.toFixed(0).padStart(20)} ${student.summativeAssessmentAvg.toFixed(0).padStart(22)} ${student.examGrade.toFixed(0).padStart(12)} ${student.finalGrade.toString().padStart(12)}  ${student.letterGrade.padStart(12)}`);
}
