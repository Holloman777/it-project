// script.js
function submitSurvey() {
    // Step 1: Get the initial interest selection
    const initialInterest = document.getElementById('initialInterest').value;

    // Hide all steps initially
    hideAllSteps();

    let suggestedProgram = '';

    if (initialInterest === 'hardwareNetworking') {
        // Step 2A - Broad IT Foundation or Networking Experience
        document.getElementById('step2A').style.display = 'block';
    } else if (initialInterest === 'softwareDesignSecurity') {
        // Step 2B - Creative Role or Cybersecurity Interest
        document.getElementById('step2B').style.display = 'block';
    }

    // Handle responses based on user selections
    const broadITFoundation = document.getElementById('broadITFoundation')?.value;
    const networkingExperience = document.getElementById('networkingExperience')?.value;
    const creativeRole = document.getElementById('creativeRole')?.value;
    const cybersecurityInterest = document.getElementById('cybersecurityInterest')?.value;
    const specializedSecurity = document.getElementById('specializedSecurity')?.value;

    if (broadITFoundation) {
        if (broadITFoundation === 'broadITFoundation') {
            document.getElementById('step3A').style.display = 'block'; // Go to Step 3A
        } else if (broadITFoundation === 'networkingExperience') {
            suggestedProgram = 'Network Support Services (NSS)'; // Go to Step 3A for networking
        }
    }

    if (networkingExperience === 'yes') {
        suggestedProgram = 'Network Support Services (NSS)';
    } else if (networkingExperience === 'no') {
        suggestedProgram = 'Computer Science and IT (CSIT)';
    }

    if (creativeRole) {
        if (creativeRole === 'yes') {
            suggestedProgram = 'Web Development Program';
        }
    }

    if (cybersecurityInterest) {
        if (cybersecurityInterest === 'someExperience') {
            document.getElementById('step4B').style.display = 'block';
        } else {
            suggestedProgram = 'CSIT (for foundational knowledge before moving into Cybersecurity)';
        }
    }

    if (specializedSecurity === 'yes') {
        suggestedProgram = 'Cybersecurity Program (Ethical Hacking, Firewalls, Risk Management)';
    } else if (specializedSecurity === 'no') {
        suggestedProgram = 'Network Support Services (NSS)';
    }

    // Show the result
    document.getElementById('result').innerHTML = `We suggest the following program for you: <strong>${suggestedProgram || 'Please explore further options or consult an advisor.'}</strong>`;
}

// Function to hide all steps
function hideAllSteps() {
    const steps = document.querySelectorAll('.question');
    steps.forEach(step => {
        step.style.display = 'none';
    });
}
