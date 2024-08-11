document.getElementById('yesBtn').addEventListener('click', function() {
    let userName = prompt("Great! Please enter your name:");
    if(userName) {
        alert(`Thank you, ${userName}! Your response has been recorded.`);
        console.log(`User ${userName} clicked Yes.`);
        // Save response to localStorage
        saveResponse(userName, 'Yes');
    } else {
        alert("You didn't enter your name.");
    }
});

document.getElementById('noBtn').addEventListener('click', function() {
    let userName = prompt("Oh no! Please enter your name:");
    if(userName) {
        alert(`Thank you, ${userName}! Your response has been recorded.`);
        console.log(`User ${userName} clicked No.`);
        // Save response to localStorage
        saveResponse(userName, 'No');
    } else {
        alert("You didn't enter your name.");
    }
});

function saveResponse(name, answer) {
    // Get existing responses from localStorage
    let responses = JSON.parse(localStorage.getItem('responses')) || [];

    // Add new response
    responses.push({ name: name, answer: answer });

    // Save back to localStorage
    localStorage.setItem('responses', JSON.stringify(responses));
}

function displayResponses() {
    let responses = JSON.parse(localStorage.getItem('responses')) || [];
    console.log("All responses:", responses);
}

// Optionally, you can display all responses when the page loads or when a button is clicked
window.onload = displayResponses;

