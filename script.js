document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
  
    function validateName() {
      if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        return false;
      } else {
        nameError.textContent = '';
        return true;
      }
    }
  
    function validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        return false;
      } else {
        emailError.textContent = '';
        return true;
      }
    }
  
    function validatePassword() {
      if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        return false;
      } else {
        passwordError.textContent = '';
        return true;
      }
    }
  
    function checkValidation() {
      if (validateName() && validateEmail() && validatePassword()) {
        submitBtn.disabled = false;
      } else {
        submitBtn.disabled = true;
      }
    }
  
    nameInput.addEventListener('input', function () {
      validateName();
      checkValidation();
    });
  
    emailInput.addEventListener('input', function () {
      validateEmail();
      checkValidation();
    });
  
    passwordInput.addEventListener('input', function () {
      validatePassword();
      checkValidation();
    });
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (validateName() && validateEmail() && validatePassword()) {
        alert('Form submitted successfully!');
      }
    });
  });
  