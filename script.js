// script.js

// Function to display current date and time in UTC format
function displayCurrentDateTime() {
    const now = new Date();
    const utcDateTime = now.toISOString().replace('T', ' ').substring(0, 19);
    console.log(`Current Date and Time (UTC): ${utcDateTime}`);
}

displayCurrentDateTime();