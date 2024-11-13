const addBookmark = async (movies_id,users_id=1) => {
  
    const data = new FormData()
    data.append("users_id", users_id)
    data.append("movies_id", movies_id)

    const response = await axios.post(
        "http://localhost:8080/AI-Movie-Recommender/server/api/isExistingBookmarks.php",
        data
    ); 
       
    !response.data && await axios.post(
        "http://localhost:8080/AI-Movie-Recommender/server/api/insertBookmarks.php",
        data
    );
    
  };
