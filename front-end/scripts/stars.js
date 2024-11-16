const postStars = async (movies_id,rating) =>{

    const data = new FormData()
    data.append("users_id", users_id)
    data.append("movies_id", movies_id)
    data.append("rating", rating)
    
    await axios.post(
        "http://localhost/AI-Movie-Recommender/server/api/insertUpdateRatings.php",
        data
    )
}

const getStars = async () =>{
    
    const data = new FormData()
    data.append("users_id", users_id)
    
    await axios.post(
    "http://localhost/AI-Movie-Recommender/server/api/selectRatingsByUserId.php",
    data
    )
    .then((response)=>{

        let ratings = response.data
        ratings.forEach(rating=>{
            const card = document.querySelectorAll(`[movieId="${rating.movies_id}"]`);
            for(let i=0;i<card.length;i++){
                const stars = card[i].querySelectorAll(".star")
                for(let i =0 ; i<rating.rating;i++){
                    stars[i].src = "./assets/filledStar.png"
                }
            }

    
        })
    }) 

}
// stars on load
getStars()