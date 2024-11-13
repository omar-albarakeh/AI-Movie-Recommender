<?php

include("connection.php");

$user_id = $_POST["user_id"];

$query = $connection->prepare("SELECT * FROM bookmarks where user_id = ?");
$query->bind_param('i',$user_id);
$query->execute();

$result = $query->get_result();

if ($result->num_rows > 0) {
    $movie_data = $result->fetch_assoc();
    echo json_encode($movie_data);
}
 else {
    echo json_encode([]);
}
