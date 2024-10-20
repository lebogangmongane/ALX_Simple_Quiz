// Function to check the user's answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback element
    const feedback = document.getElementById('feedback');

    // Check if an answer was selected
    if (!userAnswer) {
        feedback.textContent = "Please select an answer.";
        return;
    }

    // Compare the selected answer with the correct one
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}


// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
