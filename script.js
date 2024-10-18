// Get references to DOM elements
const textarea = document.getElementById('message');
const counter = document.getElementById('counter');
const warning = document.getElementById('warning');

// Maximum character limit
const maxLength = 200;

// Add event listener to track user input
textarea.addEventListener('input', () => {
    const currentLength = textarea.value.length;

    // Update the character counter
    counter.textContent = `${currentLength}/${maxLength} characters`;

    // Show or hide the warning message
    if (currentLength >= maxLength) {
        warning.classList.remove('hidden');
    } else {
        warning.classList.add('hidden');
    }
});
