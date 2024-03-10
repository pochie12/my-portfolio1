document.addEventListener('DOMContentLoaded', function () {
    // Get the login form
    var loginForm = document.getElementById('login-form');

    // Add event listener for form submission
    loginForm.addEventListener('submit', function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Redirect to sht.html
        window.location.href = 'sht.html';
    });
});

