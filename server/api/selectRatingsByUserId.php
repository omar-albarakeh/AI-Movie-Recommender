<?php

include("connection.php");

$users_id = $_POST["users_id"];

$query = $connection->prepare("SELECT * FROM ratings where users_id = ?");
$query->bind_param('i',$users_id);
$query->execute();

$result = $query->get_result();

if ($result->num_rows > 0) {
    $bookmarks_array = [];
    while ($resultObject = $result->fetch_assoc()) {
        $bookmarks_array[] = $resultObject;
    }

    echo json_encode($bookmarks_array);
} else {
    echo json_encode([]);
}
