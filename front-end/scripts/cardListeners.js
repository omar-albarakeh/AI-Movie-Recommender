// image listener
document.addEventListener("click",async (event)=>{
    if (!event.target.classList.contains("movie_image"))
        return
    let movieId = event.target.parentElement.parentElement.getAttribute("id");
    const data = new FormData()
    data.append("id", movieId)
    const response = await axios.post(
        "http://localhost:8080/AI-Movie-Recommender/server/api/selectMoviesById.php",
        data
    );    
    window.location.href = "./pages/movieDetails.html";
})