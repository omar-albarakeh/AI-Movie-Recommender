<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include 'connection.php';

$sql = "SELECT title, story, duration, categories, releaseDate 
        FROM movies 
        WHERE CHAR_LENGTH(title) < 30 AND CHAR_LENGTH(story) < 350 
        ORDER BY RAND() 
        LIMIT 1";
$result = $connection->query($sql);

if ($result->num_rows > 0) {
    $movie = $result->fetch_assoc();
    echo json_encode($movie);
} else {
    echo json_encode(["message" => "No movies found"]);
}

$connection->close();
?>
