const addClicks = async (movies_id) => {
    const data = new FormData()
    data.append("users_id", users_id)
    data.append("movies_id",movies_id)
    await axios.post(
        "http://localhost:8080/AI-Movie-Recommender/server/api/insertClicks.php",
        data
    );

  };