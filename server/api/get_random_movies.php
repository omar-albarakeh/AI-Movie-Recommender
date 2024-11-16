<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include 'connection.php';

$sql = "SELECT title FROM movies ORDER BY RAND() LIMIT 5";
$result = $connection->query($sql);

$movies = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $movies[] = $row['title'];
    }
    echo json_encode($movies);
} else {
    echo json_encode(["message" => "No movies found"]);
}

$connection->close();
?>
