<?php

include("connection.php");

$movies_id = $_POST["movies_id"];
$users_id = $_POST["users_id"];
$rating = $_POST["rating"];

$query = $connection->prepare("SELECT * FROM ratings where users_id=? AND movies_id=?");
$query->bind_param('ii',$users_id,$movies_id);
$query->execute();
$result = $query->get_result();

if ($result->num_rows > 0) {
    $query = $connection->prepare("UPDATE ratings SET rating = ? WHERE users_id=? AND movies_id = ?");
    $query->bind_param('iii',$rating,$users_id,$movies_id);
    $query->execute();
}
else{
    $query = $connection->prepare("INSERT INTO ratings (users_id,movies_id,rating) values (?,?,?)");
    $query->bind_param('iii',$users_id,$movies_id,$rating);
    $query->execute();
}



