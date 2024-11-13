<?php

include("connection.php");

$movies_id = $_POST["movies_id"];
$users_id = $_POST["users_id"];

$query = $connection->prepare("SELECT * FROM bookmarks where users_id=? and movies_id=?");
$query->bind_param('ii',$users_id,$movies_id );
$query->execute();

$result = $query->get_result();

if ($result->num_rows > 0) {
    echo True;
}
 else {
    echo FALSE;
}
