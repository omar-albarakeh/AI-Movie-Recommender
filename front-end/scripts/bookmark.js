const toggleBookmark = async (movies_id,users_id=1) => {
  
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



