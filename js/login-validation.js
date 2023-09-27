function validateLogin() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    if (username === "" || password === "") {
        alert("Please enter your username and password.");
    } else {
        alert("Login successful!");
        // Here you can add code to submit the login form or perform further actions.
    }
}