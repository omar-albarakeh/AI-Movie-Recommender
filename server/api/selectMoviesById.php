<?php

include("db-connection.php");

$id = $_POST["id"];

$query = $connection->prepare("SELECT * FROM movies where id = ?");
$query->bind_param('i',$id);
$query->execute();

$result = $query->get_result();

if ($result->num_rows > 0) {
    $movie_data = $result->fetch_assoc();
    echo json_encode($movie_data);
}
 else {
    echo json_encode([]);
}
