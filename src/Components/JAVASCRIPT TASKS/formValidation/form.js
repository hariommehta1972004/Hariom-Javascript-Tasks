function validateForm() {
    // Clear previous error messages
    document.getElementById("usernameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("confirmPasswordError").innerHTML = "";

    let isValid = true;

    // Get form elements
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validate Username
    if (username === "") {
        document.getElementById("usernameError").innerHTML = "Username is required.";
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email.";
        isValid = false;
    }

    // Validate Password
    if (password === "") {
        document.getElementById("passwordError").innerHTML = "Password is required.";
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters long.";
        isValid = false;
    }

    // Validate Confirm Password
    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").innerHTML = "Please confirm your password.";
        isValid = false;
    } else if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match.";
        isValid = false;
    }

    return isValid; // Return false if the form is invalid, preventing submission
}
