// image listener
document.addEventListener("click",async (event)=>{
    if (!event.target.classList.contains("movie_image"))
        return
    let movieId = event.target.parentElement.parentElement.getAttribute("id");
    
    window.location.href = `./pages/movieDetails.html?movie_id=${movieId}`;
    
})

// bookmark listeners
document.addEventListener("click",async (event)=>{
    if (!event.target.classList.contains("bookmark-icon"))
        return
    let movieId = event.target.parentElement.parentElement.parentElement.getAttribute("id");
    
    event.target.src = event.target.src=='./assets/filledBookmark.png' ? './assets/unfilledBookmark.png' : './assets/filledBookmark.png';
    toggleBookmark(movieId)
    
})