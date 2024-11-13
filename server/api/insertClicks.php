<?php

include("connection.php");

$movies_id = $_POST["movies_id"] ?? null;
$users_id = $_POST["users_id"] ?? null;

if($movies_id==null || $users_id==null){
    echo json_encode([
        "message"=>"there is a null value in parameters"
    ]);
}
else{ 
    $query = $connection->prepare("INSERT INTO clicks (users_id,movies_id) values (?,?)");
    $query->bind_param('ii',$users_id,$movies_id);
    $query->execute();
}

