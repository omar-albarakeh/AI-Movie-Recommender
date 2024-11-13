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

// stars listeners
// document.addEventListener("click",async (event)=>{
//     if (!event.target.classList.contains("bookmark-icon"))
//         return
//     let movieId = event.target.parentElement.parentElement.parentElement.getAttribute("id");
//     toggleStar(movieId)
//     // event.target.src = event.target.src.includes('unfilledBookmark.png') ? './assets/filledBookmark.png' : './assets/unfilledBookmark.png';    
// })