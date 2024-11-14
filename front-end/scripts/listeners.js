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
    toggleBookmark(movieId)
    event.target.src = event.target.src.includes('unfilledBookmark.png') ? './assets/filledBookmark.png' : './assets/unfilledBookmark.png';    
})
// bookmark list
document.addEventListener("click",async (event)=>{
    if (!event.target.classList.contains("view-bookmark"))
        return
    let users_id = 1
    
    window.location.href = `./pages/bookMarked.html?users_id=${users_id}`;
    
})

// Clicks
document.addEventListener("click",async (event)=>{
    if (!event.target.classList.contains("movie_image"))
        return
    let movieId = event.target.parentElement.parentElement.getAttribute("id");
    
    addClicks(movieId)
    
})

// stars

document.addEventListener("click", (event) => {
    if(!event.target.classList.contains("star"))
        return
    const movieId = event.target.parentElement.parentElement.parentElement.getAttribute("id");

    let previousStar = event.target.previousElementSibling;
    event.target.src = "./assets/filledStar.png"
    while (previousStar) {
        previousStar.src = "./assets/filledStar.png"
        previousStar = previousStar.previousElementSibling;
    }
    

    let nextStar = event.target.nextElementSibling;
    while (nextStar) {
        nextStar.src = "./assets/unfilledStar.png";
        nextStar = nextStar.nextElementSibling;
    }

    const rating = event.target.getAttribute("rank");
    console.log(movieId,rating)
    postStars(movieId,rating)
});

