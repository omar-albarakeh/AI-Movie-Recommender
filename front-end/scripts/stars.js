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