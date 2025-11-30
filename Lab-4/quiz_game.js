//          Quiz game creation using javascript 
// array consisting all the quiz questions

let quizQuestions = [
    {
        question: "What is the capital of Russia?",
        answer: "Moscow"
    },
    {
        question: "What is the value of Cos(0)?",
        answer: "1"
    },
    {
        question: "Who is the Prime Minister of Italy?",
        answer: "Giorgia Meloni"
    },
    {
        question: "What is the seven band of colors known as?",
        answer: "VIBGYOR"
    },
    {
        question: "Who was the first home minister of India?",
        answer: "Sardar Vallabhbhai Patel"
    },
    {
        question: "Who is the founder of TATA Group?",
        answer: "Jamsetji Tata"
    },
    {
        question: "Which day is accounted as Environment Day in the year?",
        answer: "5 June"
    }
];

// Function to run the quiz logic
function runQuiz() {
    let score = 0;
    for (let item of quizQuestions) {
        let userAnswer = prompt(item.question);
        
        // Basic normalization: trim whitespace and convert to lowercase for flexible checking
        let normalizedUserAnswer = userAnswer.trim().toLowerCase();
        let normalizedCorrectAnswer = item.answer.trim().toLowerCase();
        
        if (normalizedUserAnswer === normalizedCorrectAnswer) {
            alert("Correct!");
            score++;
        } else {
            alert(`Wrong! The correct answer is: ${item.answer}`);
        }
    }
    
    // Display the final score
    alert(`Quiz finished! Your final score is ${score} out of ${quizQuestions.length}.`);
}

runQuiz();