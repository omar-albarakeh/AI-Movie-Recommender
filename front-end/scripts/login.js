document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get the username and password values and trim whitespace
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Prepare the data to be sent to the server
        const data = {
            username: username,
            password: password
        };

        // Send a POST request to the login API
        fetch('http://localhost/AI-Movie-Recommender/server/api/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // Convert the data to JSON
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            // Handle the response from the server
            if (data.success) {
                window.location.href = 'http://localhost/AI-Movie-Recommender/front-end/index.html'; // Redirect on success
            } else {
                alert(data.message); // Show an error message
            }
        })
        .catch(error => {
            console.error('Login error:', error);
            alert('An error occurred. Please try again.'); 
        });
    });
});