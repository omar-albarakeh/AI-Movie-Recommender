document.addEventListener("DOMContentLoaded", function() {
    fetch('http://localhost:8080/AI-Movie-Recommender/server/api/get_movies.php')
        .then(response => response.json())
        .then(data => {
            if (data.error || data.message) {
                console.error(data.error || data.message);
                return;
            }

            const movieInfoDiv = document.getElementById('movie-info');
            movieInfoDiv.innerHTML = `
                <div class="movie-content">
                    <img src="${data.image}" alt="${data.title} Poster" class="movie-poster">
                    <div class="movie-text">
                        <h1>${data.title}</h1>
                        <div class="movie-details">
                            <span>${data.categories}</span>
                            <span>${data.duration} min</span>
                            <span>13+</span>
                            <span>${new Date(data.releaseDate).getFullYear()}</span>
                        </div>
                        <p class="description">${data.story}</p>
                        <div class="buttons">
                            <button>Add Bookmark</button>
                            <button>Watch Trailer</button>
                        </div>
                    </div>
                </div>
            `;
        })
        .catch(error => console.error('Error fetching movie data:', error));
});
