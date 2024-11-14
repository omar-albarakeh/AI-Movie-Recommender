const urlParams = new URLSearchParams(window.location.search);
const users_id = urlParams.get('user_id');
const bookmarksHTML  = (bookmarks) =>{
    let bookmarks_cards=document.getElementById("bookmarks-card")
    
    bookmarks_cards.innerHTML=""
    bookmarks.forEach(async (bookmark) =>{
        bookmarks_cards.innerHTML+=
        `   <div class="flex column movie-card">
                <div class="card-img">
                    <img class="movie_image" src='${bookmark.image}' alt="">
                </div>
            </div>
            `
    } )
}

const selectBookmarks = async (users_id) => {
  
    const data = new FormData()
    data.append("users_id", users_id)
    const response = await axios.post(
        "http://localhost:8080/AI-Movie-Recommender/server/api/selectImageByBookmarked.php",
        data
    );   
    const bookmarks = response.data
    bookmarksHTML(bookmarks)
  };
  
selectBookmarks(users_id)


