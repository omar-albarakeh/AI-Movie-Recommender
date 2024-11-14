const urlParams = new URLSearchParams(window.location.search);
const users_id = urlParams.get('user_id');
const toggleBookmark = async (movies_id) => {
  
    const data = new FormData()
    data.append("users_id", users_id)
    data.append("movies_id", movies_id)
    
    let bookmarks;
    const response = await axios.post(
        "http://localhost:8080/AI-Movie-Recommender/server/api/isBookmarked.php",
        data
    ).then((response)=>{
        bookmarks=response.data
    })

    
       
    !bookmarks && await axios.post(
        "http://localhost:8080/AI-Movie-Recommender/server/api/insertBookmarks.php",
        data
    ); 
    
    bookmarks && await axios.post(
        "http://localhost:8080/AI-Movie-Recommender/server/api/deleteBookmark.php",
        data
    );     
    
  };

const getBookmarked = async (users_id) =>{
    
    const data = new FormData()
    data.append("users_id", users_id)
    
    const response = await axios.post(
    "http://localhost:8080/AI-Movie-Recommender/server/api/selectBookmarks.php",
    data
    );    
    let bookmarks = response.data
    bookmarks.forEach(bookmark=>{
        const card = document.querySelector(`[movieId="${bookmark.movies_id}"]`);
        card.querySelector(".bookmark-icon").src = "./assets/filledBookmark.png"

    })

}
// bookmark on load
getBookmarked(users_id)


