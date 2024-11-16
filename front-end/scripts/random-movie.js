document.addEventListener("DOMContentLoaded", function() {
    fetch('http://localhost/AI-Movie-Recommender/server/api/get_random_movies.php')
        .then(response => response.json())
        .then(data => {
            const movieList = document.getElementById('random-movie-titles');

            movieList.innerHTML = '';

            if (data.message) {
                console.error(data.message);
                return;
            }

            data.forEach(title => {
                const listItem = document.createElement('li');
                listItem.textContent = title;
                movieList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching random movie data:', error));
});
