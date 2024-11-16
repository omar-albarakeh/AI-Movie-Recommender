document.addEventListener("DOMContentLoaded", function() {
    fetch('http://localhost/AI-Movie-Recommender/server/api/get_movies.php')
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                console.error(data.message);
                return;
            }

            const movieInfoDiv = document.getElementById('movie-info');
            movieInfoDiv.innerHTML = `
                <div style="display: flex; justify-contant:space-between ">
                    <div>
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
                    <img src="${data.image}" alt="${data.title} image" style="width:100%; height: auto; margin-left: 610px;">
                </div>
            `;
        })
        .catch(error => console.error('Error fetching movie data:', error));
});
