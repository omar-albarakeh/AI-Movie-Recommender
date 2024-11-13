const moviesHTML  = (movies) =>{
    let movies_cards=document.getElementById("movies-cards")
    
    movies_cards.innerHTML=""
    movies.forEach(async (movie) =>{
        movies_cards.innerHTML+=
        `   <div class="flex column movie-card" id="${movie.id}">
                <div class="card-img">
                    <img class="movie_image" src='${movie.image}' alt="">
                </div>
                <div class="flex row card-footer primary-bg">
                    <div class="flex row card-stars">
                        <img class="star" src="./assets/unfilledStar.png" alt="">
                        <img class="star" src="./assets/unfilledStar.png" alt="">
                        <img class="star" src="./assets/unfilledStar.png" alt="">
                        <img class="star" src="./assets/unfilledStar.png" alt="">
                        <img class="star" src="./assets/unfilledStar.png" alt="">
                    </div>
                    <div class="card-bookmark">
                        <img class="bookmark-icon" id="" src="./assets/unfilledBookmark.png" alt="">
                    </div>
                </div>
            </div>
            `
    } )
}

const getMovies = () => {
  
    axios.get("http://localhost/AI-Movie-Recommender/server/api/selectAllMovies.php")
      .then((response) => {
        let movies = response.data
        moviesHTML(movies)
      })
      .catch((error) => {
        console.error("Error:", error);
      })
  };
  
getMovies()