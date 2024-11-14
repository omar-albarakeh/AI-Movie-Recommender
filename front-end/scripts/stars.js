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

// const getStars = async (users_id=1) =>{
    
//     const data = new FormData()
//     data.append("users_id", users_id)
    
//     const response = await axios.post(
//     "http://localhost:8080/AI-Movie-Recommender/server/api/selectRatingsByUserId.php",
//     data
//     );    
//     let ratings = response.data
//     ratings.forEach(r=>{
//         const card = document.getElementById(r.movies_id)
//         card.querySelector(".bookmark-icon").src = "./assets/filledBookmark.png"

//     })

// }
// // bookmark on load
// getStars()