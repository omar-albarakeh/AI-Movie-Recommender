<?php
include "../db_connection.php";

$data = json_decode(file_get_contents('php://input'), true);
$username = $data['username'] ?? '';
$password = $data['password'] ?? '';

$query = $connection->prepare("SELECT * FROM users WHERE username = ?");
$query->bind_param("s", $username);
$query->execute();
$result = $query->get_result();

if ($result->num_rows > 0) {
    echo json_encode(['status' => 'error', 'message' => 'Username already exists.']);
    exit;
}

$hashed_password = password_hash($password, PASSWORD_DEFAULT);
$insert_query = $connection->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
$insert_query->bind_param("ss", $username, $hashed_password);

if ($insert_query->execute()) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Registration failed.']);
}
?>