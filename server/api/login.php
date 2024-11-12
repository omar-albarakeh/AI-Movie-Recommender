<?php
include "../db_connection.php";
$username = $_POST['username'];
$password = $_POST['password'];

$query = $connection->prepare("SELECT * FROM users WHERE username = ?");
$query->bind_param("s", $username);
$query->execute();

$result = $query->get_result();

if ($result->num_rows != 0) {
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password'])) {
        http_response_code(200);
        echo json_encode([
            "status" => "Login Successful",
            "user" => $user,
        ]);
    } else {
        http_response_code(400);
        echo json_encode([
            "status" => "Invalid Credentials",
        ]);
    }
} else {
    http_response_code(400);
    echo json_encode([
        "status" => "Invalid Credentials",
    ]);
}
?>
