document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const data = {
            username: username,
            password: password
        };

        fetch('http://localhost/AI-Movie-Recommender/server/api/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                window.location.href = 'http://localhost/AI-Movie-Recommender/front-end/index.html';
            } else {
                console.error('Login error:', data.message);
            }
        })
        .catch(error => {
            console.error('Login error:', error);
        });
    });
});
