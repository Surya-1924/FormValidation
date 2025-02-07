function handleSubmit(event) {
    event.preventDefault();
    
    const nameValid = validateName();
    const emailValid = validateEmail();
    const phoneValid = validatePhone();
    const passwordValid = validatePassword();
    const confirmPasswordValid = validateConfirmPassword();
    
    if (nameValid && emailValid && phoneValid && passwordValid && confirmPasswordValid) {
        alert("Form submitted successfully!");
    } else {
        alert("Please correct the errors in the form.");
    }
}

function validateName() {
    const name = document.getElementById('fullName').value;
    const nameError = document.getElementById('nameError');
    if (name.trim() === '') {
        nameError.textContent = 'Full Name is required';
        return false;
    } else {
        nameError.textContent = '';
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Invalid email address';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}

function validatePhone() {
    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phoneError');
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        phoneError.textContent = 'Invalid phone number';
        return false;
    } else {
        phoneError.textContent = '';
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long';
        return false;
    } else {
        passwordError.textContent = '';
        return true;
    }
}

function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match';
        return false;
    } else {
        confirmPasswordError.textContent = '';
        return true;
    }
}
