<?php

include("connection.php");

$movies_id = $_POST["movies_id"];
$users_id = $_POST["users_id"];

$query = $connection->prepare("DELETE FROM bookmarks WHERE users_id=? AND movies_id=?");
$query->bind_param('ii',$users_id,$movies_id);
$query->execute();

