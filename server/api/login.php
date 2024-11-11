<?php
include "db_connection.php";
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['user'];
    $password = $_POST['password'];

$query = $connection->prepare("SELECT * FROM users WHERE username = ?");
$query->bind_param("s", $username);
$query->execute();

$result = $query->get_result();
if($result->num_rows != 0) {
  $user = $result->fetch_assoc();

  $check = password_verify($password, $user["password"]);

  if($check){
    echo json_encode([
      "status" => "Login Successful",
      "user" => $user,
    ]);
  } else {
    echo json_encode([
      "status" => "Invalid Credentials",
    ]);
  }
} else {
  echo json_encode([
    "status" => "Invalid Credentials",
  ]);
}}
?>