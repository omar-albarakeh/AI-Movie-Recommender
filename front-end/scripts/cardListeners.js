// image listener
document.addEventListener("click",(event)=>{
    if (!event.target.classList.contains("card-img"))
        return
    let movieId = event.target.parentElement.getAttribute("id");

})