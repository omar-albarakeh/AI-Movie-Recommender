const recomHTML  = (movies) =>{
    let movies_cards=document.getElementById("recomm-cards")
    
    movies_cards.innerHTML=""
    movies.forEach(async (movie) =>{
        movies_cards.innerHTML+=
        `   <div class="flex column movie-card" movieId="${movie.id}">
                    <div class="card-img">
                        <img class="movie_image" src="${movie.image}" alt="">
                    </div>
                    <div class="flex row card-footer primary-bg">
                        <div class="flex row card-stars">
                            <img class="star" rank="1" src="./assets/unfilledStar.png" alt="">
                            <img class="star" rank="2" src="./assets/unfilledStar.png" alt="">
                            <img class="star" rank="3" src="./assets/unfilledStar.png" alt="">
                            <img class="star" rank="4" src="./assets/unfilledStar.png" alt="">
                            <img class="star" rank="5" src="./assets/unfilledStar.png" alt="">
                        </div>
                        <div class="card-bookmark">
                            <img class="bookmark-icon" src="./assets/unfilledBookmark.png" alt="">
                        </div>
                    </div>
                </div>

            `
    } )
}

const getRecom = async (users_id=1) => {
  
    const data = new FormData()
    data.append("users_id", users_id)
    await axios.post(
        "http://localhost/AI-Movie-Recommender/server/api/selectRecommendations.php",
        data
    )
    .then(res=>{
        const movies = res.data
        recomHTML(movies)
    })
    
  };
  
getRecom()