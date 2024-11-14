async function populateUserTable() {
    const userTable = document.getElementById('userTable');

    try {
        const response = await fetch('http://localhost:8080/AI-Movie-Recommender/front-end/pages/login/api/admin_data.php'); 
        if (!response.ok) {
            throw new Error('Failed to load user data');
        }

        const userData = await response.json();

        if (userData.error) {
            userTable.innerHTML = `<tr><td colspan="3">${userData.error}</td></tr>`;
            return;
        }


        userData.forEach(user => {
            const row = document.createElement('tr');

            const usernameCell = document.createElement('td');
            usernameCell.textContent = user.username;
            row.appendChild(usernameCell);


            const statusCell = document.createElement('td');
            statusCell.textContent = user.banned ? 'Banned' : 'Active';
            row.appendChild(statusCell);

            const actionCell = document.createElement('td');
            const form = document.createElement('form');
            form.action = 'ban_user.php';
            form.method = 'POST';
            form.style.display = 'inline';

            const userIdInput = document.createElement('input');
            userIdInput.type = 'hidden';
            userIdInput.name = 'user_id';
            userIdInput.value = user.id;
            form.appendChild(userIdInput);

            const button = document.createElement('button');
            button.type = 'submit';
            button.textContent = user.banned ? 'Unban' : 'Ban';
            form.appendChild(button);

            actionCell.appendChild(form);
            row.appendChild(actionCell);

            userTable.appendChild(row);
        });
    } catch (error) {
        userTable.innerHTML = `<tr><td colspan="3">Error loading user data: ${error.message}</td></tr>`;
    }
}
document.addEventListener('DOMContentLoaded', populateUserTable);
