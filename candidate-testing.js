const input = require('readline-sync');
 
// TODO 2: modify your quiz app to ask 5 questions //

// // TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? " ;
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

// let questions;
// let correctAnswers;
// let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 candidateName = input.question("Please enter your name: ");   
}

// function askQuestion() {
//   // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
// candidateAnswer = input.question(question);

// }

// TODO 1.2b: Replace your code from TODO 1.2b with a loop that programmatically asks each question in the array and stores the user's responses
function askQuestions() {
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i]);
  }
}

// function gradeQuiz(candidateAnswers) {
//   let score = 0;
//   console.log(`\nCandidate Name: ${candidateName}`);
//   for (let i = 0; i < questions.length; i++) {
//     console.log(`Question ${i + 1}: ${questions[i]}`);
//     console.log(`Your Answer: ${candidateAnswers[i].trim()}`);
//     console.log(`Correct Answer: ${correctAnswers[i]}`);
//     if (candidateAnswers[i].trim().toLowerCase() === correctAnswers[i].toLowerCase()) {
//       score++;
//     }
//   }


//   // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
// console.log(`Your answer: ${candidateAnswer}`);
// if (candidateAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
//     console.log("That's correct!");
// } else {
//   console.log("That's incorrect.");
// }

// // TODO 1.2c: Replace the basic feedback from TODO 1.2c with a template literal that displays each of the candidate’s responses in addition to the corresponding correct answers
// function gradeQuiz(candidateAnswers) {
//   let score = 0;
//   console.log(`\nCandidate Name: ${candidateName}`);
//   for (let i = 0; i < questions.length; i++) {
//     console.log(`Question ${i + 1}: ${questions[i]}`);
//     console.log(`Your Answer: ${candidateAnswers[i].trim()}`);
//     console.log(`Correct Answer: ${correctAnswers[i]}`);
//     if (candidateAnswers[i].trim().toLowerCase() === correctAnswers[i].toLowerCase()) {
//       score++;
//     }
//   }
//   let grade;  

//TODO 3.2 use this variable to calculate the candidates score.
function gradeQuiz(candidateAnswers) {
    let score = 0;
    console.log(`\nCandidate Name: ${candidateName}`);
    for (let i = 0; i < questions.length; i++) {
      console.log(`Question ${i + 1}: ${questions[i]}`);
      console.log(`Your Answer: ${candidateAnswers[i].trim()}`);
      console.log(`Correct Answer: ${correctAnswers[i]}`);
      if (candidateAnswers[i].trim().toLowerCase() === correctAnswers[i].toLowerCase()) {
        score++;
      }
    }

// Calculate the candidate score as a percentage and return grade
//Deetermine Pass/Fail status and convey to the candidate
let grade = (score / questions.length) * 100;
let status;
if (grade >= 80) {
  status = "PASSED";
} else {
  status = "FAILED";
}
console.log(`\nYour Grade: ${grade}% (${score} out of ${questions.length} correct)`);
console.log(`Status: ${status}`);

return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Hello, ${candidateName}! Welcome to the quiz.`);
  askQuestions();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
