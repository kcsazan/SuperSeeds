function validateSignUp() {
    var username = document.getElementById("signup-username").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
    var confirmPassword = document.getElementById("signup-confirm-password").value;

    var usernamePattern = /^[a-zA-Z0-9_-]{3,20}$/;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!username.match(usernamePattern)) {
        alert("Username must be 3 to 20 characters long and can only contain letters, numbers, hyphens, and underscores.");
    } else if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
    } else if (password !== confirmPassword) {
        alert("Passwords do not match.");
    } else {
        alert("Sign up successful!");
        // Here you can add code to submit the form or perform further actions.
    }
}
