<?php

include("db-connection.php");



$query = $connection->prepare("SELECT id,title FROM movies");
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
