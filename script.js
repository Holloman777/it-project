let currentStep = 1;
const steps = ['step1', 'step2A', 'step3A', 'step2B', 'step3B', 'step4B', 'step3C', 'step4C', 'step5C'];

function nextStep(stepId) {
    const currentQuestion = document.getElementById(stepId);
    const selection = currentQuestion.querySelector('select').value;

    // Hide the current question
    currentQuestion.style.display = 'none';

    // Determine the next step based on user selection
    if (stepId === 'step1') {
        if (selection === 'hardwareNetworking') {
            document.getElementById('step2A').style.display = 'block';
        } else {
            document.getElementById('step2B').style.display = 'block';
        }
    } else if (stepId === 'step2A') {
        if (selection === 'broadITFoundation') {
            document.getElementById('step3A').style.display = 'block';
        } else {
            suggestProgram('Network Support Services');
        }
    } else if (stepId === 'step3A') {
        if (selection === 'yes') {
            suggestProgram('Network Support Services');
        } else {
            suggestProgram('Computer Science and IT');
        }
    } else if (stepId === 'step2B') {
        if (selection === 'yes') {
            document.getElementById('step3C').style.display = 'block';
        } else {
            suggestProgram('Computer Science and IT');
        }
    } else if (stepId === 'step3C') {
        if (selection === 'yes') {
            document.getElementById('step4C').style.display = 'block';
        } else {
            suggestProgram('Computer Science and IT');
        }
    } else if (stepId === 'step4C') {
        if (selection === 'yes') {
            document.getElementById('step5C').style.display = 'block';
        } else {
            suggestProgram('Computer Science and IT');
        }
    } else if (stepId === 'step5C') {
        suggestProgram('Web Development Program');
    } else if (stepId === 'step3B') {
        if (selection === 'someExperience') {
            document.getElementById('step4B').style.display = 'block';
        } else {
            suggestProgram('Computer Science and IT');
        }
    } else if (stepId === 'step4B') {
        if (selection === 'yes') {
            suggestProgram('Cybersecurity Program (Ethical Hacking, Risk Management)');
        } else {
            suggestProgram('Network Support Services');
        }
    }
}

function suggestProgram(program) {
    document.getElementById('programSuggestion').innerHTML = `We suggest the following program for you: <strong>${program}</strong>`;
    document.getElementById('result').style.display = 'block';

    // Show the return button to allow restarting the quiz
    document.getElementById('returnButton').style.display = 'inline-block';
}

function restartQuiz() {
    // Hide the result
    document.getElementById('result').style.display = 'none';

    // Reset the form and show the first question again
    document.getElementById('surveyForm').reset();
    document.getElementById('returnButton').style.display = 'none'; // Hide return button
    document.getElementById('step1').style.display = 'block';
    hideAllSteps();
    document.getElementById('step1').style.display = 'block'; // Show first question
}

function hideAllSteps() {
    steps.forEach(step => {
        document.getElementById(step).style.display = 'none';
    });
}

document.getElementById('step1').style.display = 'block';
