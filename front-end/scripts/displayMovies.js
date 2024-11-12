const moviesHTML  = (movies) =>{
    let data_info_element=document.getElementById("movies-cards")
    
    data_info_element.innerHTML=""
    movies.forEach(movie =>{
        data_info_element.innerHTML+=
        `   <div class="flex column movie-card" id="${movie.id}">
                <div class="card-img">
                    <img src='${movie.image}' alt="">
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

