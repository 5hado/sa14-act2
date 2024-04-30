const registrationForm = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    clearErrors();

    let isValid = true;

    if (username.value.length < 6) {
        showError('username', 'Username must be at least 6 characters long');
        isValid = false;
    }

    if (!isValidEmail(email.value)) {
        showError('email', 'Invalid email format');
        isValid = false;
    }

    if (password.value.length < 8 || !containsCapitalAndNumber(password.value)) {
        showError('password', 'Password must be at least 8 characters long and contain at least one capital letter and one number');
        isValid = false;
    }

    if (isValid) {
        alert('Registration successful!');
        registrationForm.reset();
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function containsCapitalAndNumber(password) {
    const capitalRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    return capitalRegex.test(password) && numberRegex.test(password);
}

function showError(inputId, message) {
    const errorSpan = document.getElementById(`${inputId}Error`);
    errorSpan.textContent = message;
}

function clearErrors() {
    const errorSpans = document.querySelectorAll('.error');
    errorSpans.forEach(span => {
        span.textContent = '';
    });
}
