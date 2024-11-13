<?php

include("connection.php");

$users_id = $_POST["users_id"];

$query = $connection->prepare("SELECT image from movies m inner join bookmarks b on m.id = b.movies_id where users_id=?");
$query->bind_param('i',$users_id);
$query->execute();

$result = $query->get_result();

if ($result->num_rows > 0) {
    $movies_array = [];
    while ($resultObject = $result->fetch_assoc()) {
        $movies_array[] = $resultObject;
    }

    echo json_encode($movies_array);
} else {
    echo json_encode([]);
}