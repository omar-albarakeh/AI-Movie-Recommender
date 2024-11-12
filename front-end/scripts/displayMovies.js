const moviesHTML  = (movies) =>{
    let movies_cards=document.getElementById("movies-cards")
    
    movies_cards.innerHTML=""
    movies.forEach(movie =>{
        movies_cards.innerHTML+=
        `   <div class="flex column movie-card" id="${movie.id}">
                <div class="card-img">
                    <img src='${movie.image}' alt="">
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
                        <img src="./assets/unfilledBookmark.png" alt="">
                    </div>
                </div>
            </div>
        `
    } )
}

const getMovies = () => {
  
    axios.get("http://localhost:8080/AI-Movie-Recommender/server/api/selectAllMovies.php")
      .then((response) => {
        let movies = response.data
        console.log(movies)
        moviesHTML(movies)
      })
      .catch((error) => {
        console.error("Error:", error);
      })
  };
  
getMovies()