const toggleBookmark = async (movies_id) => {
  
    const data = new FormData()
    data.append("users_id", users_id)
    data.append("movies_id", movies_id)
    
    let bookmarks;
    const response = await axios.post(
        "http://localhost/AI-Movie-Recommender/server/api/isBookmarked.php",
        data
    ).then((response)=>{
        bookmarks=response.data
    })

    
       
    !bookmarks && await axios.post(
        "http://localhost/AI-Movie-Recommender/server/api/insertBookmarks.php",
        data
    ); 
    
    bookmarks && await axios.post(
        "http://localhost/AI-Movie-Recommender/server/api/deleteBookmark.php",
        data
    );     
    
  };

const getBookmarked = async (users_id) =>{
    
    const data = new FormData()
    data.append("users_id", users_id)
    
    await axios.post(
    "http://localhost/AI-Movie-Recommender/server/api/selectBookmarks.php",
    data
    )
    .then((response)=>{

        let bookmarks = response.data
        bookmarks.forEach(bookmark=>{
            const card = document.querySelectorAll(`[movieId="${bookmark.movies_id}"]`);
            for(let i=0;i<card.length;i++){

                card[i].querySelector(".bookmark-icon").src = "./assets/filledBookmark.png"
            }
    
        })
    })    

}

getBookmarked(users_id)