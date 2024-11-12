<?php

include("connection.php");

$movies_id = $_POST["movies_id"];
$users_id = $_POST["users_id"];

$query = $connection->prepare("INSERT INTO bookmarks (users_id,movies_id) values (?,?)");
$query->bind_param('ii',$users_id,$movies_id);
$query->execute();

