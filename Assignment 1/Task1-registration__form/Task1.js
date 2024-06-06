document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const fields = [
        { id: 'firstname', validation: /^[A-Za-z\s]+$/, errorMessage: 'Firstname should only contain letters and spaces.' },
        { id: 'lastname', validation: /^[A-Za-z\s]+$/, errorMessage: 'Lastname should only contain letters and spaces.' },
        { id: 'email', validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errorMessage: 'Please enter a valid email address.' },
        { id: 'mobile', validation: /^[6-9]\d{9}$/, errorMessage: 'Mobile number should start with 6, 7, 8, or 9 and be 10 digits long.' },
        { id: 'password', validation: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, errorMessage: 'Password must be at least 8 characters long, contain at least one capital letter, one number, and one special character.' },
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        input.addEventListener('input', () => {
            if (field.id === 'password') {
                validatePasswordField(input.value.trim(), field.errorMessage);
            } else {
                validateField(field.id, field.validation, field.errorMessage);
            }
        });
    });

    document.getElementById('confirmPassword').addEventListener('input', validateConfirmPassword);

    
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        
        fields.forEach(field => {
            const input = document.getElementById(field.id);
            const errorElement = document.getElementById(`${field.id}Error`);
            if (!input.value) {
                errorElement.textContent = 'This field is required.';
            } else {
                errorElement.textContent = '';
            }
        });

       
        let isValid = true;
        fields.forEach(field => {
            isValid = validateField(field.id, field.validation, field.errorMessage) && isValid;
        });
        isValid = validateConfirmPassword() && isValid;

        
        if (isValid) {
            const student = {
                firstname: form.firstname.value.trim(),
                lastname: form.lastname.value.trim(),
                email: form.email.value.trim(),
                mobile: form.mobile.value.trim(),
                gender: form.gender.value,
                class: form.class.value.trim(),
                rollNumber: form.rollNumber.value.trim(),
                password: form.password.value.trim(),
            };
            let students = JSON.parse(localStorage.getItem('students')) || [];
            students.push(student);
            localStorage.setItem('students', JSON.stringify(students));
            alert('Student registered successfully!');
            form.reset();
        }
    });

    function validateField(id, regex, errorMessage) {
        const input = document.getElementById(id);
        const errorElement = document.getElementById(`${id}Error`);
        if (!regex.test(input.value.trim())) {
            errorElement.textContent = errorMessage;
            return false;
        } else {
            errorElement.textContent = '';
            return true;
        }
    }

    function validatePasswordField(password, errorMessage) {
        const errorElement = document.getElementById('passwordError');
        const hasLetter = /[A-Za-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialCharacter = /[@$!%*?&]/.test(password);

        if (hasLetter && !hasNumber && !hasSpecialCharacter) {
            errorElement.textContent = 'Password must contain one number and one special character.';
        } else if (!hasLetter && hasNumber && !hasSpecialCharacter) {
            errorElement.textContent = 'Password must contain one letter and one special character.';
        } else if (!hasLetter && !hasNumber && hasSpecialCharacter) {
            errorElement.textContent = 'Password must contain one letter and one number.';
        } else if (hasLetter && hasNumber && !hasSpecialCharacter) {
            errorElement.textContent = 'Password must contain one special character.';
        } else if (hasLetter && !hasNumber && hasSpecialCharacter) {
            errorElement.textContent = 'Password must contain one number.';
        } else if (!hasLetter && hasNumber && hasSpecialCharacter) {
            errorElement.textContent = 'Password must contain one letter.';
        } else if (password.length < 8) {
            errorElement.textContent = 'Password must be 8 characters long';
        } else {
            errorElement.textContent = '';
        }
    }

    function validateConfirmPassword() {
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();
        const errorElement = document.getElementById('confirmPasswordError');
        if (password !== confirmPassword) {
            errorElement.textContent = 'Passwords do not match.';
            return false;
        } else {
            errorElement.textContent = '';
            return true;
        }
    }
});
