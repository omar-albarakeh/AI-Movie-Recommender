const recomHTML  = (movies) =>{
    let movies_cards=document.getElementById("recomm-cards")
    
    movies_cards.innerHTML=""
    movies.forEach(async (movie) =>{
        movies_cards.innerHTML+=
        `   <div class="flex column movie-card" id="recom-${movie.id}">
                    <div class="card-img">
                        <img src="${movie.image}" alt="">
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

const getRecom = async (users_id=1) => {
  
    const data = new FormData()
    data.append("users_id", users_id)
    await axios.post(
        "http://localhost:8080/AI-Movie-Recommender/server/api/selectRecommendations.php",
        data
    )
    .then(res=>{
        const movies = res.data
        recomHTML(movies)
    })
    
  };
  
getRecom()