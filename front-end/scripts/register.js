document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('registerForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('registerUser').value;
        const password = document.getElementById('registerPassword').value;

        const data = {
            username: username,
            password: password
        };

        fetch('http://localhost/AI-Movie-Recommender/server/api/register.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                window.location.href = 'http://localhost/AI-Movie-Recommender/front-end/pages/login.html';
            } else {
                console.error('Registration error:', data.message);
            }
        })
        .catch(error => {
            console.error('Error during registration:', error);
        });
    });
});
