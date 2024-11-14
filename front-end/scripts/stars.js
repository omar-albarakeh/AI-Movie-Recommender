const postStars = async (movies_id,rating,users_id = 1) =>{

    const data = new FormData()
    data.append("users_id", users_id)
    data.append("movies_id", movies_id)
    data.append("rating", rating)
    
    await axios.post(
        "http://127.0.0.1:8080/AI-Movie-Recommender/server/api/insertUpdateRatings.php",
        data
    )
}

const getStars = async (users_id=1) =>{
    
    const data = new FormData()
    data.append("users_id", users_id)
    
    const response = await axios.post(
    "http://localhost:8080/AI-Movie-Recommender/server/api/selectRatingsByUserId.php",
    data
    );    
    let ratings = response.data
    await ratings.forEach(rating=>{
        const card = document.querySelector(`[movieId="${rating.movies_id}"]`);
        const stars = card.querySelectorAll(".star")
        for(let i=0;i<rating.rating;i++)
            stars[i].src = "./assets/filledStar.png"

    })

}
// bookmark on load
getStars()