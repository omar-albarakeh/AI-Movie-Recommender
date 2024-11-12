const detailsHTML  = (movies) =>{
    let movies_cards=document.getElementById("details-main")
    
    movies_cards.innerHTML=""
    
    movies_cards.innerHTML+=
    `   <div class="flex column movieDetails white-txt">
            <div class="detail-title">
                <h1>${movies.title}</h1>
            </div>
            <div class="flex row detail-subtitle grey-txt">
                <p>${movies.categories}</p>
                <p>${movies.duration}</p>
            </div>
            <div class="detail-img">
                <img src="${movies.image}" alt="">
            </div>
            <div class="detail-date grey-txt">
                <p>${movies.releaseDate}</p>
            </div>
            <div class="detail-story">
                <p>${movies.story}
                </p>
            </div>
            <div class="detail-actors grey-txt">
                <p>${movies.actors}</p>
            </div>

        </div>`
    } 


const getMovies = async (movie_id) => {
    const data = new FormData()
    data.append("id", movie_id)
    const response = await axios.post(
        "http://localhost:8080/AI-Movie-Recommender/server/api/selectMoviesById.php",
        data
    );   
    const movies = response.data
    detailsHTML(movies)

  };
const movieId = new URLSearchParams(window.location.search).get("movie_id");
getMovies(movieId)